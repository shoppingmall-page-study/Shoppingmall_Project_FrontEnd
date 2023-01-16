import { Button, styled, TextField } from "@mui/material"
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { signin, userGet } from "../../api/ApiService";
import { login } from "../../modules/user";
import "./Login.css"

const CssLoginTextField = styled(TextField)({ //TextField스타일 컴포넌트 생성
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

const CssLoginButton = styled(Button)({
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

const CssGoogleLoginButton = styled(Button)({
    height: '2.5rem',
    marginTop: '1rem',
    borderRadius: '0%',
    background: '#4285F4',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '0rem',
    '&:hover': {
        background: '#4285F4'
    }
})

const CssKakaoLoginButton = styled(Button)({
    height: '2.5rem',
    marginTop: '1rem',
    padding: '0%',
    borderRadius: '0%',
    background: '#FEE500',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'black',
    '&:hover': {
        background: '#FEE500'
    }
})

const Login = () => {
    const dispatch = useDispatch();
    
    const HandleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const email = data.get('email')
        const password = data.get('password')
        signin({email: email, password: password})
    }

    return(
        <div className="Login_Position">
            <div className="Login_Window">
                <form onSubmit={HandleLogin} className="Login_Input_Window">
                    <div className="Login_Logo">
                        <Link to='/'>SHOP</Link>
                    </div>
                    <div className="Login_Text">
                        <h3>로그인</h3>
                    </div>
                    <div className="Login_Input">
                        <CssLoginTextField
                        fullWidth
                        required
                        name="email"
                        size="small"
                        label='email'
                        />
                    </div>
                    <div className="Login_Input">
                        <CssLoginTextField
                        fullWidth
                        required
                        size="small"
                        name="password"
                        label='password'
                        type='password'
                        />
                    </div>
                    <div className="Login_Register">
                        <Link id='Login_Register_Link' to='/register'>회원가입</Link>
                    </div>
                    <div>
                        <CssLoginButton
                        fullWidth
                        variant="contained"
                        type="submit"
                        >로그인</CssLoginButton>
                    </div>
                    <div>
                        <CssGoogleLoginButton
                        className="Login_GoogleLogin_Logo"
                        variant="contained"
                        fullWidth
                        >
                        <span id="Login_GoogleLogin_Text">
                            로그인
                        </span>
                        </CssGoogleLoginButton>
                    </div>
                    <div>
                        <CssKakaoLoginButton
                        className="Login_KakaoLogin_Logo"
                        variant="contained"
                        fullWidth
                        >
                        <span id="Login_KakaoLogin_Text">
                            카카오 로그인
                        </span>
                        </CssKakaoLoginButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login