<template>
  <div class="talk">
    <button @click="addLove_list">获 取话</button>
    <ul>
      <li v-for="talk in LoveList.loveTalk" :key="talk.id">
        情话ID: {{ talk.id }} 内容: {{ talk.content }}
      </li>
    </ul>
  </div>
</template>
<script script setup lang="ts" name="">
import { reactive, ref } from "vue";
import { useTalkStore } from "../store/lovetalk";
import axios from "axios";
// https://api.uomg.com/api/rand.qinghua?format=json
const LoveList = useTalkStore();
console.log(LoveList);
async function addLove_list() {
  let request = await axios.get(
    "https://api.uomg.com/api/rand.qinghua?format=json"
  );
  console.log(LoveList.loveTalk_length);
  LoveList.loveTalk.push({
    id: "asnic" + (LoveList.loveTalk_length + 1),
    content: request.data.content,
  });
}
</script>
<style scoped>
.talk {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  margin-top: 10px;
}
select {
  margin-right: 10px;
}
button {
  margin-right: 10px;
}
</style>
