<template>
  <div class="person">
    <h2>需求: 当水温达到60度时,或水位达到80cm时,给服务器发送请求</h2>
    <h2>当前水温度为: {{ temp }} C</h2>
    <h2>当前水位为: {{ height }} cm</h2>
    <button @click="changeSum">水温+=10</button>
    <button @click="changeheight">水位+=10</button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, watch, watchEffect } from "vue";
let temp = ref(0);
let height = ref(0);
function changeSum() {
  temp.value += 10;
}
function changeheight() {
  height.value += 10;
}
// watch([temp, height], (newValue, oldValue) => {
//   let [newTemp, newHeight] = newValue;
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log("给服务器发亲求");
//   }
// });

//响应式的监视不像watch要指定监视谁
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log("给服务器发亲求");
  }
});
</script>
<style scoped>
.person {
  background-color: #aff;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin-right: 10px;
}
input {
  margin-bottom: 10px;
}
</style>
