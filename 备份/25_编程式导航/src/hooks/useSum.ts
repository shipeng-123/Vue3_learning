import { onMounted, ref } from "vue";
export default function () {
  let sum = ref(0);
  function add() {
    sum.value += 1;
  }
  onMounted(() => {
    add();
  });
  //向外部提供东西
  return { sum, add };
}
