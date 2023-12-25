<template>
  <div class="person">
    姓: <input type="text" v-model="firstName" />
    <br />
    名: <input type="text" v-model="lastName" /> <br />
    全名: <span>{{ fullName }}</span>
    <br />
    <button @click="changefullName" style="margin-top: 10px">
      点我修改名字
    </button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, reactive, toRefs, toRef, computed } from "vue";
let firstName = ref("zhang");
let lastName = ref("san");
// 示例

// 创建一个只读的计算属性 ref：

// js
// const count = ref(1)
// const plusOne = computed(() => count.value + 1)

// console.log(plusOne.value) // 2

// plusOne.value++ // 错误
//利用computed计算fullName存在缓存所以如果相关的值没有变化computed就不会调用
let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "-" +
      lastName.value
    );
  },
  set(val) {
    const [str1, str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
  },
});
function changefullName() {
  fullName.value = "张-三";
}
//computed 返回一个只读的ref变量
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
