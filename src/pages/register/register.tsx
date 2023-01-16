import { Button, styled, TextField, TextFieldProps } from "@mui/material"
import { FormEvent, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { signup } from "../../api/ApiService";
import Postcode from "../../lib/post/PostCode";
import "./register.css"

const CssRegisterTextField = styled(TextField)({ //TextField스타일 컴포넌트 생성
    "& .MuiOutlinedInput-root": { //TextField를 가리키는 클래스명
      "& fieldset": { //기본화면에서 TextField 설정
        border: '1px solid #343a40', //테두리를 black으로
        borderRadius: '0%',
      },
    //   "&:hover fieldset": { //마우스를 올렸을 때 설정 현재는 필요 없으므로 주석처리
    //     borderColor: "black"
    //   },
      "&.Mui-focused fieldset": { //마우스로 TextField를 클릭했을 때 설정
        border: '1px solid #343a40',
      },
      "& .MuiOutlinedInput-notchedOutline":{
        "& fieldset":{
            border: '1px solid #343a40'
        }
      }
    },
    '& .MuiInputLabel-root': {
        "&.Mui-focused": {
            color: '#343a40',
        }
    }
  });

const CssRegisterButton = styled(Button)({
    fontSize: '1rem',
    height: '2.5rem',
    marginTop: '1rem',
    borderRadius: '0%',
    fontWeight: 'bold',
    padding: '0rem',
    background: '#15aabf',
    '&:hover': {
        background: '#15aabf'
    }
})

const CssRegisterPostcodeBtn = styled(Button)({
    fontSize: '0.875rem',
    fontWeight: 'bold',
    background: '#fafbf6',
    borderRadius: '0%',
    border: '1px solid #343a40',
    color: '#343a40',
    marginLeft: '0.5rem',
    '&:hover': {
        background: '#fafbf6'
    }
})

const HandleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const username = data.get('username')
    const email = data.get('email')
    const password = data.get('password')
    const age = data.get('age')
    const nickname = data.get('nickname')
    const phoneNumber = data.get('phoneNumber')
    const postCode = data.get('postCode')
    const address = data.get('address')
    signup({username: username, email: email, password: password, age: age, nickname: nickname, phoneNumber: phoneNumber,
            postCode: postCode, address: address})
}

const Register = () => {
    const postcodeRef = useRef<HTMLInputElement | null>(null)
    const addrRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        const post = document.createElement("script");
        post.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        document.head.appendChild(post);
        return () => {
        document.head.removeChild(post);
        }      
    },[])

    

    return(
        <div className="Register_Position">
            <form onSubmit={HandleRegister} className="Register_Window">
                <div className="Register_Logo">
                    <Link to="/">SHOP</Link>
                </div>
                <div className="Register_Text">
                    <h3>회원가입</h3>
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name="username"
                    size="small"
                    label='이름'
                    />
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name="email"
                    size="small"
                    label='이메일'
                    />
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name="password"
                    size="small"
                    type='password'
                    label='비밀번호'
                    />
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name='age'
                    size="small"
                    /*type='number' 문제 숫자만 입력 가능하게 하고 싶은데 문자, 특수문자 모든게 입력이 되고, 
                                    증가, 감소버튼 클릭뿐만 아니라 스크롤로도 숫자가 증가하는 문제*/
                    type='text' //해결방법 text로 설정하고 inputProps를 숫자만 들어오게 설정
                    label='나이'
                    // InputLabelProps={{
                    //     shrink: true //true일 경우 lable이 항상 테두리에 존재
                    // }}
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                    />
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name="nickname"
                    size="small"
                    label='닉네임'
                    />
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name="phoneNumber"
                    size="small"
                    label='전화번호'
                    />
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    style={{flex: 1}}
                    required
                    size="small"
                    inputRef={postcodeRef}
                    InputLabelProps={{
                        shrink: true
                    }}
                    label='우편번호'/>
                    <CssRegisterPostcodeBtn
                    onClick={() => Postcode(postcodeRef.current!, addrRef.current!)}>
                        우편주소찾기
                    </CssRegisterPostcodeBtn>
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name="postCode"
                    size="small"
                    inputRef={addrRef}
                    InputLabelProps={{
                        shrink: true
                    }}
                    label='주소'
                    />
                </div>
                <div className="Register_Input">
                    <CssRegisterTextField
                    fullWidth
                    required
                    name="address"
                    size="small"
                    label='상세주소'
                    />
                </div>
                <CssRegisterButton
                variant="contained"
                fullWidth
                        type="submit"
                >회원가입</CssRegisterButton>
            </form>
        </div>
    )
}

export default Register