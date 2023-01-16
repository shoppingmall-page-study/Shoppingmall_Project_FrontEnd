import { CheckBox } from '@mui/icons-material'
import './CartHeader.css'

const CartHeader = () => {
    return(
        <div>
            <ul id='CartHeader_Grid'>
                <CheckBox/>
                <li>상품정보</li>
                <li>수량</li>
                <li>상품금액</li>
            </ul>
        </div>
    )
}

export default CartHeader