import './CartTotal.css'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DensityLargeOutlinedIcon from '@mui/icons-material/DensityLargeOutlined';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const CartTotal = () => {
    return(
        <div>
            <ul id='CartTotal_Flex'>
                <ul id='CartTotal_Price'>
                    <li id='CartTotal_TotalPriceName'>총 상품금액</li>
                    <li id='CartTotal_TotalPrice'>24000<span id='CartTotal_Price_Unit'>원</span></li>
                </ul>
                <RemoveOutlinedIcon/>
                <ul id='CartTotal_Sale'>
                    <li id='CartTotal_SaleName'>상품 할인</li>
                    <li id='CartTotal_SalePrice'>0<span id='CartTotal_Price_Unit'>원</span></li>
                </ul>
                <AddOutlinedIcon/>
                <ul id='CartTotal_Delivery'>
                    <li id='CartTotal_DeliveryName'>배송비</li>
                    <li id='CartTotal_DeliveryPrice'>0<span id='CartTotal_Price_Unit'>원</span></li>
                </ul>
                <DragHandleIcon/>
                <ul id='CartTotal_Pay'>
                    <li id='CartTotal_PayPriceName'>결제 금액</li>
                    <li id='CartTotal_PayPrice'>24000<span id='CartTotal_Price_Unit'>원</span></li>
                </ul>
            </ul>
        </div>
    )
}

export default CartTotal