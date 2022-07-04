// Find if Path Exists in Graph
// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -1 (inclusive).
// The edges in the graph are represented as a 2D integer array edges,
// where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi.
// Every vertex pair is connected by at most one edge, and no vertex has an edge toitself.
// You want to determine if there is a valid path that exists from vertex source to vertex destination.
// Given edges and the integers n, source, and destination, 
// return true if there is a valid path from source to destination, or false otherwise.

// Example 1
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Example 2
// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false

var validPath = function(n, edges, source, destination) {

    let graph = new Map();
    let visited = new Set();
    
    for(let [e1,e2] of edges){
      if(graph.has(e1)){
        graph.get(e1).push(e2);
      } else {
        graph.set(e1, [e2]);
      }
  
      if(graph.has(e2)){
        graph.get(e2).push(e1);
      } else {
        graph.set(e2, [e1]);
      }
    }
    function dfs(vertex){
      visited.add(vertex);
      let edgesV  = graph.get(vertex);
      if (edgesV && edgesV.length > 0){
        for (let e of edgesV){
          if(!visited.has(e)){
            dfs(e);
          }
        }
      }
    }
  
    dfs(source);
  
    return visited.has(destination);
  };