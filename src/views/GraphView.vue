<script setup lang="ts">
import TheGraph from '../components/TheGraph.vue'
</script>

<template>
    <div class="editor-container">
      <div class="editor-toolbar">Toolbar</div>
      <div class="editor-main">
        <div class="editor-library">
          <p>
            Library 2
          </p>
        </div>
        <div class="editor-graph">
          Hi Warren
<!--          <TheGraph/>-->
        </div>
        <div class="editor-properties">
          <p>
            Properties
          </p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.editor-container {
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
.editor-toolbar {
  margin: auto;
  background-color: red;
}
.editor-main {
  flex-direction: row;
}
.editor-graph {
  width: 50%;
}
.editor-library {
  flex-direction: column;
  width: 20%;
  background-color: blue;
}
.editor-properties {
  flex-direction: column;
  width: 20%;
  background-color: purple;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
