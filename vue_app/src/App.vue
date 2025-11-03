<template>
  <div class="content">
    <v-btn @click="increment"> click it!! {{ count }} </v-btn>
    <v-btn> Button </v-btn>
    <v-text-field v-model="msg" />
  </div>
  <AsyncComp1 />
  <AsyncComp2 />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
import { LoadChild1, LoadChild2 } from "./lib";
const count: any = ref(0);
const msg: any = ref("wawa");
function increment() {
  count.value++;
}
const AsyncComp1 = defineAsyncComponent(async () => await LoadChild1());
const AsyncComp2 = defineAsyncComponent(async () => await LoadChild2());
</script>

<style scoped>
.content {
  width: 400px;
  align-items: center;
  display: flex;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>