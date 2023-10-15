<script setup lang="ts">
let panels = [0, 0]
</script>

<template>
  <div class="libraries">
    <div class="search-container">
      <input class="search-input" placeholder="Search Library"/>
      <v-icon icon="mdi-search"/>
    </div>
    <v-expansion-panels v-model="panels" variant="accordion" multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>System Components</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card elevation="2">
            <v-img src="../assets/tcdx.svg" :width="200" :height="200"/>
          </v-card>
          <v-card>PIE</v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Engines</v-expansion-panel-title>
        <v-card>hello</v-card>
        <v-card>world</v-card>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.search-input {
  border: 1px;
}
</style>
