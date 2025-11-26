// MVC의 경우 타임리프를 가지고 서버에서 처리한 다음 결과 html을 보내주는 방식
// ex) 처리 과정에서 서버 세션에 접근이 가능

import { create } from "zustand";

const useAuthStore = create((set, get)=>{
  return {
    // undefined, true/false
    login: undefined,
    readLogin:function() {
      // 앱을 실행하면 서버에서 로그인 정보를 읽어오는 테스트용 가짜 메소드
      // setTimeout을 이용해 1초뒤에 로그인이 false로 설정되도록 함
      const login = get().login;
      if(login===undefined) {
        setTimeout(()=>{
          set(state=>({login:false}));
        }, 1000);
      }

    },
    setLogin:()=>set(state=>({login:true})),
    setLogout:()=>set(state=>({login:true}))
  }
});

export default useAuthStore;