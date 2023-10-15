<script setup lang="ts">
import {ref, onMounted, onBeforeMount} from 'vue'
// import './style.css';
import {type CellStyle, Graph} from '@maxgraph/core'
import {registerCustomShapes} from './custom-shapes'
import {useGraphStore} from '@/stores/graph.ts'
import {storeToRefs} from "pinia";

onMounted(() => {
  const graphStore = useGraphStore()
  const {initializeGraph} = graphStore
  const {graph} = storeToRefs(graphStore)

  // keep a copy of the graph in local storage and update when it changes
  graphStore.$subscribe((mutation, state) => {
    // localStorage.setItem('graph', JSON.stringify(state))  this didn't work because of circular structure
  })

  // Create the graph inside the given container
  initializeGraph(<HTMLElement>document.getElementById('graph-container'))

  const g = graph.value // why did I need to do this? WGS
  // shapes and styles
  registerCustomShapes()
  // @ts-ignore TODO fix TS2532: Object is possibly 'undefined'.
  g.getStylesheet().getDefaultEdgeStyle().edgeStyle = 'orthogonalEdgeStyle' // TODO use constants.EDGESTYLE instead of 'orthogonalEdgeStyle'

  // Gets the default parent for inserting new cells. This
  // is normally the first child of the root (ie. layer 0).
  const parent = g.getDefaultParent()

  // Adds cells to the model in a single step
  g.batchUpdate(() => {
    const vertex01 = g.insertVertex(parent, null, 'a regular rectangle', 10, 10, 100, 100)
    const vertex02 = g.insertVertex(parent, null, 'a regular ellipse', 350, 90, 50, 50, <
        CellStyle
        >{
      shape: 'ellipse',
      fillColor: 'orange'
    })
    g.insertEdge(parent, null, 'a regular edge', vertex01, vertex02)

    // insert vertices using custom shapes
    // TODO type issue in CellStyle type, shape should allow string to manage custom implementation
    const vertex11 = g.insertVertex(
        parent,
        null,
        'a custom rectangle',
        20,
        200,
        100,
        100,
        /*<CellStyle>*/ {shape: 'customRectangle'}
    )
    const vertex12 = g.insertVertex(
        parent,
        null,
        'a custom ellipse',
        150,
        350,
        70,
        70,
        /*<CellStyle>*/ {shape: 'customEllipse'}
    )
    g.insertEdge(parent, null, 'another edge', vertex11, vertex12)
  })
})
</script>

<template>
  <div id="graph-container"></div>
</template>
