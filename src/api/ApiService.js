import { API_BASE_URL } from "./app-config";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export const call = (api, method, request) => {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== "") {
    headers.append("Authorization", accessToken);
    axios.defaults.headers.common['Authorization'] = "Bearer  " + accessToken;
  }

  let options = {
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // GET method
    options.data = request;
  }
  return axios(options.url, options)
    .then((response) =>
     {
      console.log(response)
      if(response.status === 200){
        console.log("true")
        return response
      }
      }).catch((error)=>{
        console.log(error.response)
        console.log(error.response.status)
        let errorresponse = error.response.status;
        if(errorresponse === 406){
          console.log(1)
          alert("이미 계정이 존재합니다")
          
        }
        else if(errorresponse === 403){
          window.location.href = "/login"

        }
        else if(errorresponse === 401){
          console.log(1)
          localStorage.setItem(ACCESS_TOKEN,"");
          window.location.href = "/login";
        }else if(errorresponse === 500){
          console.log(1)
          localStorage.setItem(ACCESS_TOKEN,"");
          window.location.href = "/";
        }

      })
  
}

export const signin = (userDTO) => {
  return axios.post("https://hannam.shop/api/login", userDTO).then((response) => {
    console.log("실행됨");

    let jwt = response.headers.authorization;
    if(jwt !== null){

      localStorage.setItem(ACCESS_TOKEN, jwt);
      window.location.href = "/";
    }
  }).catch(function(err){
    if(err.status !== 200){
      alert("로그인에 실패했습니다.");
      window.location.href = "/login";
    }
  })
}

export const signout = () => {
  localStorage.setItem(ACCESS_TOKEN,"");
  window.location.href = "/login";
}


export const signup = (userDTO) => {
  return call("/api/join", "POST", userDTO).then((res) => {
    console.log(res)
    if(res === undefined){
      alert("회원가입에 실패하였습니다.")
    }else{
    if(res.status === 200){
      alert('회원가입 정상적으로 이루어졌습니다.')
      window.location.href = "./login"
    }else if(res.status === 400){
      alert('에러 발생')
    }}
  })
}

export const registration = (userDTO) => {
  return call("/api/Oauth/join", "POST", userDTO);
}
 
export const productCreate = (goodsDTO) => {
  return call("/api/product/create", "POST", goodsDTO)
}

export const productGet = () => {
  return call("/api/products","GET","")
}

//장바구니 추가
export const cartCreate = (cartDTO) => {
  return call(`/api/cart/create/${cartDTO.productId}`,"POST",cartDTO)
    // if(response.status === 200){
    //   // alert(response.data)
    //   console.log(response.msg)
    //   // window.location.reload()
    // }else{
    //   alert("오류")
    // }
}

export const cartGet = () => {
  return call("/api/cart/user", "GET", "")
}

export const reviewCreate = (reviewDTO) => {
  return call(`/api/review/create/${reviewDTO.productId}`,"POST",reviewDTO)
}

export const reviewGet = (id) => {
  return call(`/api/review/${id}`,"GET","")
}

export const cartDelete = (id) => {
  return call(`/api/cart/delete/${id}`,"DELETE","")
}

export const userGet = () => {
  return call("/api/user/info", "GET", "")
}

//장바구니 수정
export const cartUpdate = (cartDTO) => {
  return call(`/api/cart/update/${cartDTO.cartId}`,"PUT",cartDTO)
}

// const navigate = useNavigate();
export const userUpdate = (userDTO) => {
  return call("/api/user/update","PUT",userDTO)
}

export const userReviewGet = () => {
  return call("/api/review/user","GET","")
}

export const reviewDelete = (id) => {
  return call(`/api/review/delete/${id}`,"DELETE","")
}

export const userGoodsupGet = () => {
  return call("/api/products/user","GET","")  
}

export const searchPost = (searchDTO) =>{
  return call("/api/product/search", "POST", searchDTO)
}

export const userProductDelete = (id) => {
  return call(`/api/product/delete/${id}`,"DELETE","")
}

export const reviewUpdate = (reviewDTO) => {
  return call(`/api/review/update/${reviewDTO.reviewId}`,"PUT",reviewDTO)
}

export const userProductUpdate = (productDTO) => {
  return call(`/api/product/update/${productDTO.productId}`,"PUT",productDTO)
}

export const payMent = (payDTO) => {
  return call('/api/order/create', "POST", payDTO)
}

export const payMentComplete = (payCompleteDTO) => {
  return call("/api/payments/complete", "POST", payCompleteDTO)
}

export const order = () => {
  return call("/api/order","GET","")
}

//이메일 중복검사
export const emailCheck = (emailDTO) => {
  return call(`/api/join/email-check/${emailDTO}`,"GET","")
}

//닉네잉ㅁ 중복검사
export const nicknameCheck = (nicknameDTO) => {
  return call(`/api/join/nickname-check/${nicknameDTO}`,"GET","")
}