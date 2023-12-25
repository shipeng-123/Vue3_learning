<template>
  <div class="person">
    姓: <input type="text" v-model="firstName" />
    <br />
    名: <input type="text" v-model="lastName" /> <br />
    全名: <span @click="">{{ fullName }}</span>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, reactive, toRefs, toRef, computed } from "vue";
let firstName = ref("zhang");
let lastName = ref("san");
let fullName = computed(() => {
  return firstName.value + "~~~~~~~~~~~" + lastName.value;
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
