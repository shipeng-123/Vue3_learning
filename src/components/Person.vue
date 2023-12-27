<template>
  <div class="person">
    <ul>
      <li v-for="Person in List" :key="Person.id">
        {{ Person.name }}--{{ Person.age }}--{{ Person.id }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, withDefaults } from "vue";
import { type PersonInter, type PersonList } from "@/types";
//接收a 但在Script里不能直接log打印
// defineProps(["a", "b"]);
//接收a 并用Props保存起来 才可以用于打印
//只接收List
// let x = defineProps(["List"]);
//接收List+限制类型
// defineProps<{ List: PersonList }>();
// console.log(x);
// 接收list + 限制类型 + 限制必要性 + 指定默认值
// withDefaults(defineProps<{ List?: PersonList }>(), {
//   List: () => [
//     { id: "string1", name: "张3", age: 18 },
//     { id: "string2", name: "张2", age: 18 },
//     { id: "string3", name: "张1", age: 18 },
//   ],
// });
withDefaults(defineProps<{ List?: PersonList }>(), {
  List: () => [
    { id: "string1", name: "张3", age: 18 },
    { id: "string1", name: "张3", age: 18 },
    { id: "string1", name: "张3", age: 18 },
  ],
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
