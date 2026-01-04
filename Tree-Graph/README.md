# Tree & Graph Algorithms

This folder contains JavaScript implementations of classic tree and graph problems, each with a meaningful filename and a brief description of the problem it solves.

## What are Trees and Graphs?

Trees and graphs are hierarchical and network data structures, respectively. Trees have a root and branches, while graphs can have cycles and multiple connections.

### Visual Diagram (ASCII)

Tree:
```
    1
   / \
  2   3
 /   / \
4   5   6
```

Graph:
```
1 -- 2
|    |
3 -- 4
```

### Key Concepts
- Trees: traversal (DFS, BFS), parent-child relationships.
- Graphs: nodes, edges, cycles, connectivity.

### Basic Pseudocode (BFS)

```
queue = [root]
while queue:
    node = queue.pop(0)
    // process node
    for child in node.children:
        queue.append(child)
```

### More Visual Resources
- [Tree Traversal Explained (YouTube)](https://www.youtube.com/watch?v=QfJsau0ItOY)
- [Graph Algorithms Explained (YouTube)](https://www.youtube.com/watch?v=pcKY4hjDrxk)
- [LeetCode Patterns: Trees & Graphs](https://leetcode.com/explore/learn/card/data-structure-tree/)

---

Each file contains a problem statement, example, and a working solution.