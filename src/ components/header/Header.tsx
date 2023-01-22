import { Link, Outlet } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Header.css'
import { Button, InputAdornment, Menu, styled, TextField } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useCallback, useRef, useState } from 'react';
import { signout } from '../../api/ApiService';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const CssHeaderTextField = styled(TextField)({ //TextField스타일 컴포넌트 생성
    "& .MuiOutlinedInput-root": { //TextField를 가리키는 클래스명
      "& fieldset": { //기본화면에서 TextField 설정
        border: '1px solid black', //테두리를 black으로
        borderRadius: '0%',
      },
    //   "&:hover fieldset": { //마우스를 올렸을 때 설정 현재는 필요 없으므로 주석처리
    //     borderColor: "black"
    //   },
      "&.Mui-focused fieldset": { //마우스로 TextField를 클릭했을 때 설정
        border: '1px solid black'
      },
      "& .MuiOutlinedInput-notchedOutline":{
        "& fieldset":{
            border: '1px solid black'
        }
      }
    }
  });

// const CssLogoutButton = styled(Button)({
//     fontSize: '1rem',
//     color: '#000000',
//     padding: '0px 0.25rem',
//     textDecoration: 'none',
//     height: '2rem',
//     // letterSpacing: '0.25rem',
//     border: '1px solid #bcbfc6',
//     borderRadius: '0%',
//     background: '#fafbf6',
//     '&:hover': {
//         background: '#fafbf6'
//     }
// })

const Header = () => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN")
    // const state = accessToken === "" ? true : false
    const [state, setState] = useState<Boolean>(false)
    const username = useSelector((state: RootState) => state.UserReducer.username)

    return (
        <>
            <header>
                <div className='Header_Grid'>
                    <div className='Header_Logo'>
                        <Link to='/'>SHOP</Link>
                    </div>
                    <div>
                        <CssHeaderTextField 
                        autoComplete='true'
                        id='Header_Search'
                        placeholder='상품을 검색해주세요'
                        fullWidth
                        variant='outlined'
                        size='small'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <SearchOutlinedIcon id='Header_Search_Btn'/>
                                </InputAdornment>
                            )
                        }}
                        />
                    </div>
                    {state ? (
                        <div className='Header_Login_window'>
                            <ul id='Header_Login_Grid'>
                                <li><Link to='/login'>로그인</Link></li>
                                <li><Link to='/register'>회원가입</Link></li>
                            </ul>
                        </div>
                    ) : (
                    <div>
                        <div className='Header_List_window'>
                            <ul id='Header_List_Grid'>
                                <li><Link to='/cart'>장바구니</Link></li>
                                <li><Link to='/upload'>상품등록</Link></li>
                                <li id='Header_User_Menu_Position'>
                                    <div className='Header_User_Menu_Window'>
                                        <Link id='Header_User' to='/user'>000님<span id='Header_User_Menu_Icon'><KeyboardArrowDownOutlinedIcon id='Header_Menu_Down'/><KeyboardArrowUpOutlinedIcon id='Header_Menu_Up'/></span></Link>
                                        <div className='Header_User_Menu'>
                                        <p id='Header_User_Menu_P'><Link to='/review/list'>리뷰목록</Link></p>
                                        <p id='Header_User_Menu_P'><Link to='/order/list'>주문목록</Link></p>
                                        <p id='Header_User_Menu_P'><Link to='/product/list'>등록상품목록</Link></p>
                                        <p id='Header_User_Menu_P'><Link to='/login' style={{fontWeight: 'bold'}}>로그아웃</Link></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    )}
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Header