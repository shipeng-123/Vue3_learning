<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 价值 {{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车品牌</button>
    <button @click="changePrice">修改汽车价格</button>
    <hr />
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, reactive } from "vue";
let car = reactive({ brand: "奔驰", price: 100 });
let sum = ref(0);
function changePrice() {
  car.price += 10;
}
function changeSum() {
  sum.value += 1;
}
function changeBrand() {
  // reactive如果重新分配对象那会失去原来的响应式
  // 用Object.assign(target,source1,source2,.....)来重新分配对象
  // car = { brand: "奥迪", price: 200 }
  // 但是如果用ref就能直接改
  Object.assign(car, { brand: "奥托", price: 30, age: 18 });
  console.log(car);
}
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
</style>
