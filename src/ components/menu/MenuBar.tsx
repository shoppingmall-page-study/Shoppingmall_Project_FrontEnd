import { NavLink, Outlet } from "react-router-dom"
import './MenuBar.css'

const activeStyle = {
    color: '#2a7ed2',
    fontWeight: 'bold',
    borderBottom: '2px solid #2a7ed2',
}

const MenuBar = () => {
    return(
        <div className="MenuBar_Width_Set">
            <div className="MenuBar_Window">
                <ul id="MenuBar_Ul">
                    <li><NavLink to='/user' style={({isActive}) => isActive ? activeStyle : undefined}>회원정보</NavLink></li>
                    <li><NavLink to='/review/list' style={({isActive}) => isActive ? activeStyle : undefined}>리뷰목록</NavLink></li>
                    <li><NavLink to='/order/list' style={({isActive}) => isActive ? activeStyle : undefined}>주문목록</NavLink></li>
                    <li><NavLink to='/product/list' style={({isActive}) => isActive ? activeStyle : undefined}>등록상품목록</NavLink></li>
                </ul>
                <div className="MenuBar_Main">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default MenuBar