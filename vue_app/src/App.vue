<template>
  <div class="content">
    <button @click="increment" :style="{ width: '80px' }">
      click it!! {{ count }}
    </button>
    <p>咕咕嘎嘎</p>
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