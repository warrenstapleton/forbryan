import {ref} from 'vue'
import {defineStore} from 'pinia'
import {Graph, InternalEvent, RubberBandHandler} from '@maxgraph/core';

export const useGraphStore = defineStore('graph', () => {

        const graph = ref<Graph>()

        function createGraph(container: HTMLDivElement) {
            InternalEvent.disableContextMenu(container)
            graph.value = new Graph(container)
        }

        function initializeGraph() {

            if (graph.value == null) {
                return
            }

            console.log("initializeGraph")

            // Disable the built-in context menu
            // InternalEvent.disableContextMenu(container);
            graph.value.setConnectable(true)
            graph.value.setCellsEditable(false)
            // graph.value.convertValueToString = (cell) => {
            //     return this.R.prop('title', cell)
            // }
            graph.value.setPanning(true); // Use mouse right button for panning
            // WARN: as the maxGraph css files are not available in the npm package (at least for now), dedicated CSS class must be defined in style.css
            new RubberBandHandler(graph.value); // Enables rubber band selection
            // graph.addListener(DoubleClick, (graph, evt) => {
            //     const cell = this.R.pathOr([], ['properties', 'cell'], evt)
            //     console.info(cell)
            // })
        }

        return {graph, createGraph, initializeGraph}
    }
)
