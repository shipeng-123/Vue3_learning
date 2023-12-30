import { defineStore } from "pinia";
export const useTalkStore = defineStore("lovetalk", {
  state() {
    return {
      loveTalk: [
        {
          id: "asnic1",
          content: "你今天有点怪",
        },
      ],
    };
  },
  getters: {
    loveTalk_length: (state) => {
      return state.loveTalk.length;
    },
  },
});
