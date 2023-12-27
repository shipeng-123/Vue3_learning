<template>
  <Person :List="person_List" />
</template>
<script name="App" setup lang="ts">
import Person from "../../src/components/Person.vue";
import { reactive } from "vue";
import { type PersonList } from "./types/";
let person_List = reactive<PersonList>([
  { id: "ajsfhubaeu1", name: "张三", age: 19 },
  { id: "ajsfhubaeu2", name: "王五", age: 1200 },
  { id: "ajsfhubaeu3", name: "在找死", age: 19123, x: 3 },
]);
</script>
<style></style>
