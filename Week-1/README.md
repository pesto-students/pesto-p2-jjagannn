Exercise 1
1.When a user enters an URL in the browser, how does the browser fetch the desired
result ? Explain this with the below in mind and Demonstrate this by drawing a diagram
for the same.

a.What is the main functionality of the browser?
b.High Level Components of a browser.
c.Rendering engine and its use.
d.Parsers (HTML, CSS, etc)
e.Script Processors
f.Tree construction
g.Order of script processing
h.Layout and Painting

Outcomes:
1.Submit this assignment on GIT - Answer should be in readme File (with images) on GIT.
2.Candidates should be able to explain how a browser works.
3.What are the high level components of a browser?
4.How each component works with each other. (For example: Networking component is
the one which makes HTTP calls, Data storage component is a browser’s persistence
layer which saves data locally such as Cookies and Local Storage.
5.How Parsing works and its importance.
6.The order of execution of scripts.

Guidelines:
1.Under the hood understanding of how a browser works.
2.What are the features a browser provides?
3.What a browser is capable of doing.
4.How a web page is translated from a string in a URL to a webpage.

Answers for Exercise 1:-

When we enter a URL on our browser’s address bar say “http://www.google.com”,
the browser communicates with the DNS(Domain Name Service) service via our ISP(Internet Service Provider). The DNS finds the IP address for the domain which has the resources stored corresponding to the URL that we have passed and returns the HTML document to our browser back via our ISP. The browser understands this HTML document, renders it as a web page and paints it on our display screen.

The main functionality of the browser is to retrieve information from other parts of the web, render that and display it on our device. The browser here uses a HTTP(HyperText Transfer Protocol) protocol to transmit text, audio, images, video and render HTML documents which is its purpose.

The high level components of a browser are
User Interface - the address bar, back and forward buttons, bookmarking menu and every part of the browser other than the browser display where rendered content appears.
Browser Engine - serves as an interface between the UI and the rendering engine.
Rendering Engine - responsible for displaying the requested content. It parses the HTML + CSS and displays the parsed content on the screen. Rendering is a combination of layout + painting the screen.
Networking - responsible for network calls such as HTTP requests. Its significance is in making HTTP calls to the DNS server to identify the IP address where the resource is located, returning the HTML document to the browser which then renders it.
JavaScript Interpreter - responsible for parsing and executing JavaScript code.
UI Backend - responsible for user interface methods. document API and window API.
Data Persistence/ Storage - responsible for storing different types of data such as on localStorage, sessionStorage and cookies.

Rendering engine and its use:
A rendering engine is a software that draws text and images on the screen.
The engine draws structured text from a document (often HTML) and formats it properly based on the given style declarations (CSS).
Examples: Blink(Chrome), WebKit(Safari), Gecko(Mozilla).

Parsers(HTML, CSS):
Parser reads HTML documents, converts them into tokens, tokens are converted into DOM nodes which combines with CSSOM to form the render tree.
Parsing is the step in which the browser turns the data which it receives over the network into DOM and CSSOM. The HTML is parsed into a DOM tree and the CSS is parsed into a CSSOM tree. DOM and CSSOM are independent data structures.

HTML parsing DOM- the browser reads raw bytes of the HTML file and transforms them into characters. The characters are further parsed into tokens. The parser parses the tokenized input into the document, building the document tree.

CSS parsing into CSSOM- The browser converts the CSS rules into a map of styles it can understand and work with. The browser goes through each rule, creates a tree of nodes and sets parent, child, sibling relationships based on the CSS selectors. To have the CSSOM compatible with HTML to render, the browser converts the CSS rules into something it can work with. Hence, it repeats the HTML-to-object process but for the CSS.

Script Processors:
The script processor is responsible for executing JavaScript code to process an event.
The scripts that are enclosed within <script> tags, are to be loaded along with the HTML and CSS content which is performed by this particular processor.

Order of script processing:
The JavaScript code on the page is part of the HTML document, so the order in which the JavaScript code is loaded is the order in which the <script> tag appears, and the external JS in the <script> tag or introduced through src attribute is executed in the order in which the statement appears and the execution process is part of the document loading.

Tree Construction:
The CSSOM and DOM trees are combined into a render tree which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen.

Steps in tree construction -
Starting at the root of the DOM tree, traverse each visible node.
Some nodes are not visible(script, meta) are omitted since they are not reflected on the rendered output.
Some nodes are hidden via CSS (display: none, removes from the render tree and does not occupy the layout) are also omitted from the render tree.
For each visible node, find the appropriate matching CSSOM rules and apply them.
Emit visible nodes with content and their computed styles.
Note: visibility: hidden occupies an empty block space on the layout although not visible.

Layout and Painting:
In the layout process, the output is a ‘box model’ which precisely captures the exact position and size of each element within the viewport. All of the relative measurements are converted to absolute pixels on the screen.

The final step is known as painting or rasterizing.
Painting is the stage in which each node in the render tree is converted to actual pixels on the screen.This step takes quite a bit of time because the browser has to do a bit of work. However, Chrome DevTools can provide insight on the timelines for parse, layout and paint.

The layout event captures the render tree construction, position and size calculation in the timeline.
When layout is complete, the browser issues “Paint setup” and “Paint” events, which convert the render tree to pixels on the screen.


Figure 1 - High level components of a browser
pesto-p2-jjagannn\Week-1\Browser-high-level-components.png

Figure 2 - Process flow (Parse –> Render –> Layout –> Paint)
pesto-p2-jjagannn\Week-1\process-flow-browser-working.png
