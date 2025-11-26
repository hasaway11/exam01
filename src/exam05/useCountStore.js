// 상태와 그상태를 다루는 함수를 외부에 저장(store). 필요한 컴포넌트만 구독하자

import { create } from "zustand";

const useCountStore = create((set)=>{
  return {
    count: 1,
    inc:function() {
      set(state=>({count:state.count+1}))
    },
    dec:()=>set(state=>({count:state.count-1}))
  }
});

export default useCountStore;