import axios from "axios";

// CORS : REST 통신은 요청과 응답이 같은 주소여야 한다
//       ex) www.naver.com -> comics.naver.com 브라우저가 차단
// MVC : 프론트 페이지를 백이 보내주는 형식이 CORS가 발생하지 않는다 -> 백과 프론트가 신뢰할 수 있다

// Cookie : 서버에서 클라이언트에 저장하는 텍스트 정보. 클라이언트가 서버에 접속하면 자동으로 전송
//      ex) www.naver.com에서 수신한 쿠키는 www.naver.com에 접근하면 자동으로 전송한다
// HttpSession : 세션은 쿠키 기반으로 동작한다
//      ex) 자바의 경우 jsessionid라는 쿠키를 이용해서 사용자의 세션을 구별한다
//          서버에서 수신한 쿠키에 jsessionid가 없으면 jsessionid 쿠키를 생성해서 기록한다
//      ex) 쿠키는 브라우저마다 따로 관리 -> A브라우저로 로그인했더라도 B브라우저로 접근하면 비로그인    

// REST는 쿠키를 위험하다고 판단해서 재전송하지 않는다 -> 세션 로그인이 동작하지 않는다
// 세션 로그인을 사용하려면 쿠키를 서버로 전송하라는 옵션을 지정해야 한다 -> withCredentials:true
// withCredentials:true를 지정하면 쿠키가 동반되므로 CORS 보안이 더욱 엄격하게 적용된다 -> 서버 옵션이 바뀌어야 한다

// const api = axios.create({baseURL:'https://contactsvc.bmaster.kro.kr/contacts', withCredentials:true});

const api = axios.create({baseURL:'https://contactsvc.bmaster.kro.kr/contacts'})

export default api;

