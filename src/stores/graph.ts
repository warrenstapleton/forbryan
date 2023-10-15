import {ref} from 'vue'
import {defineStore} from 'pinia'
import {Graph, InternalEvent, RubberBandHandler} from '@maxgraph/core';

export const useGraphStore = defineStore('graph', () => {

        const graph = ref(null as Graph)

        function initializeGraph(container: HTMLDivElement) {
            // console.log("initializeGraph container=", container)
            graph.value = new Graph(container)
            // Disable the built-in context menu
            InternalEvent.disableContextMenu(container);
            graph.value.setPanning(true); // Use mouse right button for panning
            // WARN: as the maxGraph css files are not available in the npm package (at least for now), dedicated CSS class must be defined in style.css
            new RubberBandHandler(graph.value); // Enables rubber band selection
        }

        return {graph, initializeGraph}
    }
)
