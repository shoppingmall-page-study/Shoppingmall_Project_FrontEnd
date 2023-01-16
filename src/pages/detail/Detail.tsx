import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './Detail.css'
import styled from "@emotion/styled";

const CssDetailBtn = styled(Button)({
    fontSize: '1rem',
    border: '1px solid #000000',
    borderRadius: '0%',
    color: 'black',
    width: '10rem',
    height: '3rem',
    background: '#fafbf6',
    margin: '0.625rem',
    '&:hover': {
        background: '#fafbf6'
    }
})

const activeStyle = {
    color: 'white',
    background: '#2a7ed2',
    fontWeight: 'bold',
    borderColor: '#2a7ed2'
}

const Detail = () => {
    const page = useParams()
    const [data, setData] = useState([])

    return(
        <div className='Detail_Window_Flex'>
        <div className="Detail_Window">
            <h3 style={{margin: '1rem 0rem'}}>상세보기</h3>
        <div className="Detail_Grid">
            <div className="Detail_Info_Image_Flex">
                <div className="Detail_Info_Image_Window">
                    <img id="Detail_Info_Image" src='https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG' alt='도라에몽'/>
                </div>
            </div>
            <div>
                <div className="Detail_Info_Name">
                    도라에몽
                </div>
                <div className="Detail_Info_Price">
                    1000<span id="Detail_Info_Price_Unit">원</span>
                </div>
                <div className="Detail_Info_Content">
                    도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~
                    도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~
                    도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~
                    도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~
                    도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~도라에몽~
                </div>
                <div className="Detail_Info_Count_Window">
                    <p id="Detail_Info_Count_Name">수량</p>
                    <div className="Detail_Info_Count">
                        <RemoveOutlinedIcon
                        id="Detail_Info_Count_Minus"
                        />
                        3
                        <AddOutlinedIcon
                        id="Detail_Info_Count_Plus"
                        />
                    </div>
                </div>
                <div className="Deatil_Info_Total_Window">
                    <div className="Deatil_Info_Total_Name">총 상품금액</div>
                    <div className="Detail_Info_Total_Content">
                        <p id="Detail_Info_Total_Count">총 수량 : 10개</p>
                        <p id="Detail_Info_Total_Price">10000<span id='Detail_Info_Total_Price_Unit'>원</span></p>
                    </div>
                </div>
                <div className="Detail_Info_Btn">
                    <CssDetailBtn>장바구니</CssDetailBtn>
                    <CssDetailBtn>구매하기</CssDetailBtn>
                </div>
            </div>
        </div>
        <div className="Detail_Review_Header">
            <h3 style={{margin: '1rem 0rem'}}>리뷰</h3>
            <div className="Detail_Review_Link">
                <NavLink to='review/look' id='Detail_Review_Look' style={({isActive}) => isActive ? activeStyle : undefined}>보기</NavLink>
                <NavLink to='review/write' id='Detail_Review_Write' style={({isActive}) => isActive ? activeStyle : undefined}>쓰기</NavLink>
            </div>
        </div>
            <Outlet/>
        </div>
        </div>
    )
}

export default Detail