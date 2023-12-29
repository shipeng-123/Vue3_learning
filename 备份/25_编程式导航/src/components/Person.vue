<template>
  <div class="person">
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr />
    <img v-for="(dogimg, index) in dogList" :src="dogimg" :key="index" />
    <br />
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>
<script setup lang="ts">
import useSum from "../hooks/useSum";
import useDog from "../hooks/useDog";
const { sum, add } = useSum();
const { dogList, getDog } = useDog();
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
img {
  width: 100px;
  margin-right: 10px;
}
</style>
