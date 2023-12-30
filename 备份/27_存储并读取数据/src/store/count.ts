import { defineStore } from "pinia";
//这里用hooks命名法 usexxx
export const useCountStore = defineStore("count", {
  // 真正存储数据的地方
  state() {
    return {
      sum: 0,
    };
  },
});
