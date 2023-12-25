<template>
  <div class="person">
    <h1></h1>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="changeSum">点我 sum +1</button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, watch } from "vue";
let sum = ref(0);
function changeSum() {
  sum.value += 1;
}
// watch(监视谁?,回调函数)
//监视,情况一:监视(ref)定义的(基本类型|)数据
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log(`${newValue},${oldValue},`);
  if (newValue > 10) {
    //当sum>10结束监视
    stopWatch();
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
