import { Route, Routes } from "react-router-dom";
import Header from "../ components/header/Header";
import MenuBar from "../ components/menu/MenuBar";
import DetailReviews from "../ components/review/DeatilReviews";
import DetailReviewWrite from "../ components/review/DetailReviewWrite";
import Cart from "../pages/cart/Cart";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import OrderList from "../pages/order/OrderList";
import ProductList from "../pages/product/ProductList";
import Register from "../pages/register/register";
import ReviewList from "../pages/review/ReviewList";
import Upload from "../pages/upload/Upload";
import User from "../pages/user/User";
import UserModify from "../pages/user/UserModify";

const ShopRouters = () => {
    return(
        <Routes>
            <Route element={<Header/>}> {/*헤더 부분은 모든 곳에서 쓰이니 고정으로 사용 중첩된 라우터 기법*/}
                <Route index element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}>
                    <Route path="review/look" element={<DetailReviews/>}/>
                    <Route path="review/write" element={<DetailReviewWrite/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route element={<MenuBar/>}>
                    <Route path="/user" element={<User/>}/>
                    <Route path="/review/list" element={<ReviewList/>}/>
                    <Route path="/order/list" element={<OrderList/>}/>
                    <Route path="/product/list" element={<ProductList/>}/>
                </Route>
                <Route path="/user/modify" element={<UserModify/>}/>
            </Route>
        </Routes>
    )
}

export default ShopRouters