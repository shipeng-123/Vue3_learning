<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 价值 {{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <hr />
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">点我sum+1</button>
    <ul>
      <li v-for="game in games" :keys="game.id">
        {{ game.name }}
      </li>
      <button @click="changeFirestgamename">修改第一游戏的名字</button>
    </ul>
    <h2>{{ obj.a.b.c }}</h2>
    <button @click="changeC">测试</button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, reactive } from "vue";
let car = reactive({ brand: "奔驰", price: 100 });
let games = reactive([
  { id: "adagh1", name: "网站1" },
  { id: "adagh2", name: "网站2" },
  { id: "adagh3", name: "网站3" },
]);
let sum = ref(0);
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});
function changePrice() {
  console.log(car);
  car.price += 10;
  console.log(car.price);
}
function changeFirestgamename() {
  games[0].name = "网站1修改了";
}
function changeC() {
  obj.a.b.c = 1000;
}
</script>
<style scoped>
.person {
  background-color: #aff;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
