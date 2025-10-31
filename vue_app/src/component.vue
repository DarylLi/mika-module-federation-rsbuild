<template>
  <div class="rootMain">
    <p>this is Vue Child</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const count: any = ref(0);
function increment() {
  count.value++;
}
</script>

<style scoped>
.rootMain {
  background: #dedede;
  width: 180px;
  display: block;
  border-radius: 5px;
  margin-left: 40px;
  text-align: center;
  color: #fff;
}
</style>