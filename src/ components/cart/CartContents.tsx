import styled from "@emotion/styled"
import { CheckBox } from "@mui/icons-material"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './CartContents.css'

const CartContents = () => {
    return(
        <div className="CartContents_Grid">
            <CheckBox
            />
            <div className="CartContents_Flex">
                <div className="CartContents_Img_Window">
                    <img  id='CartContents_Img' src="https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG" alt="google_logo"/>
                </div>
                <div className="CartContents_Product_Info">
                    <p id="CartContents_ProductName">도라에몽 인형도라에몽 인형도라에몽 인형</p>
                    <p id='CartContents_ProductPrice'>8000<span id='CartContents_Price_Unit'>원</span></p>
                </div>
            </div>
            <div className='CartContents_Count'>
                <RemoveOutlinedIcon
                id="CartCountents_Count_Minus"
                />
               3
               <AddOutlinedIcon
               id="CartCountents_Count_Plus"
               />
            </div>
            <div>
                24000<span id='CartContents_Price_Unit'>원</span>
            </div>
        </div>
    )
}

export default CartContents