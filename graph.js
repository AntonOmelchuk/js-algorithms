class Graph {
  constructor() {
    this.vertices = []
    this.edges = []
    this.numberOfEdges = 0
  }

  addVertex(vertex) {
    this.vertices.push(vertex)

    this.edges[vertex] = []
  }

  removeVertex(vertex) {
    const idx = this.vertices.indexOf(vertex)

    if (idx >= 0) {
      this.vertices.splice(idx, 1)
    }

    while (this.edges[vertex].length) {
      const adjacentVertex = this.edges[vertex].pop()

      this.removeEdge(adjacentVertex, vertex)
    }
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2)
    this.edges[vertex2].push(vertex1)
    this.numberOfEdges++
  }

  removeEdge(vertex1, vertex2) {
    const idx1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1
    const idx2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1

    if (idx1 >= 0) {
      this.edges[vertex1].splice(idx1, 1)
      this.numberOfEdges--
    }

    if (idx2 >= 0) {
      this.edges[vertex2].splice(idx2, 1)
    }
  }

  size() {
    return this.vertices.length
  }

  relations() {
    return this.numberOfEdges
  }

  print() {
    console.log(this.vertices.map(vertex => {
      return `${vertex} => ${this.edges[vertex].join(', ').trim()}`
    }, this).join(' | '))
  }
}
