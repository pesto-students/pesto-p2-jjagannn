Design High level block diagrams for 2 real world applications:
1. Design subscription-based sports website which candisplay scores, gamestatus, history for any games.
2. Design Twitter application
    ○User should be able to tweet
    ○Timeline -> Home timeline , User timeline, Search timeline
    ○User should also be able to see trending hashtags and topics

Benchmarks
●The provide design should have requirement clarification, capacity and constraints, System API, Database Design, ●Basic Algorithm or Data structure use to solve some feature and a *High level block diagram*

Solution:

    Market understanding:
    Traffic: Twitter now has 300M worldwide active users. Every second on an average, around 6,000 tweets are tweeted on Twitter. Also, every second 6,00,000 Queries made to get the timelines

    Expected features:
    ○User should be able to tweet
    ○Timeline -> Home timeline , User timeline, Search timeline
    ○User should also be able to see trending hashtags and topics

    Considerations before designing twitter:

    1. If you see all of the features, it looks like read heavy, compared to write
    2. Its ok to have Eventual consistency, It's not much of a pain if the user sees the tweet of his follower a bit delayed
    3. Space is not a problem as tweets are limited to 140 characters

    As we know the system is read heavy let's use REDIS to access most of the information faster and also to store data but don’t forget to store a copy of tweet and other users related info in Database.

    Basic Architecture of Twitter service consists of a User Table, Tweet Table, and Followers Table

    User Information is stored in User Table.
    When a user tweets it gets stored in the Tweet Table along with User ID.
    User Table will have 1 to many relationships with Tweet Table.
    When a user follows another user, it gets stored in Followers Table, and also cache it Redis.

    How to build USER TIMELINE?
    1. Fetch all the tweets from Global Tweet Table/Redis for a particular user
    2. Which also includes retweets, save retweets as tweets with original tweet reference
    3. Display it on user timeline, order by date time

    Optimizations:
    Save user timeline in the cache, eg: celebrities timelines are accessed million times so it’s not much use to get it from DB always.
    Don’t compute timeline for inactive users who don’t log in to the system for more than 15 days

    How to build HOME TIMELINE?
    Strategy: Solution is a write based fanout approach. Do a lot of processing when tweets arrive to figure out where tweets should go. This makes read time access fast and easy. Don’t do any computation on reads. With all the work being performed on the write path ingest rates are slower than the read path. So precompute timelines for every active user and store it in the cache, so when the user accesses the home timeline, all you need to do is just get the timeline and show it

    A simple flow of tweet looks like,

    User A Tweeted
    Through Load Balancer tweet will flow into back-end servers
    Server node will save tweet in DB/cache
    Server node will fetch all the users that follow User A from the cache
    Server node will inject this tweet into in-memory timelines of his followers
    Eventually, all followers of User A will see the tweet of User A in their timeline

    Searching:

    Early Bird uses inverted full-text index. This means that it takes all the documents, splits them into words, and then builds an index for each word. Since the index is an exact string-match, unordered, it can be extremely fast. Hypothetically, an SQL unordered index on a varchar field could be just as fast, and in fact I think you’ll find the big databases can do a simple string-equality query very quickly in that case.

    Lucene does not have to optimize for transaction processing. When you add a document, it need not ensure that queries see it instantly. And it need not optimize for updates to existing documents.

    However, at the end of the day, if you really want to know, you need to read the source. Both things you reference are open source, after all.

    It has to scatter-gather across the datacenter. It queries every Early Bird shard and asks do you have content that matches this query? If you ask for “New York Times” all shards are queried, the results are returned, sorted, merged, and reranked. Rerank is by social proof, which means looking at the number of retweets, favorites, and replies.

    Databases:

    Gizzard is Twitter’s distributed data storage framework built on top of MySQL (InnoDB). InnoDB was chosen because it doesn’t corrupt data. Gizzard us just a datastore. Data is fed in and you get it back out again. To get higher performance on individual nodes a lot of features like binary logs and replication are turned off. Gizzard handles sharding, replicating N copies of the data, and job scheduling.
    Cassandra is used for high velocity writes, and lower velocity reads. The advantage is Cassandra can run on cheaper hardware than MySQL, it can expand easier, and they like schemaless design.
    Hadoop is used to process unstructured and large datasets, hundreds of billions of rows.
    Vertica is being used for analytics and large aggregations and joins so they don’t have to write MapReduce jobs.