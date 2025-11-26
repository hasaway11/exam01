import { create } from "zustand";

const useLoginStore=create((set)=>{
  return {
    login: false,
    setLogin:function() {
      set(state=>({login:true}))
    },
    setLogout:function() {
      set(state=>({login:false}))
    }
  }
});

export default useLoginStore;