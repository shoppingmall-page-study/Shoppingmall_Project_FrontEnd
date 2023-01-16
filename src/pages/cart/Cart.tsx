import CartContents from "../../ components/cart/CartContents"
import CartHeader from "../../ components/cart/CartHeader"
import CartTotal from "../../ components/cart/CartTotal"

const Cart = () => {
    return(
        <div style={{
            background: 'white',
            // alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            minWidth: '75rem',
            maxWidth: '93.75rem',
            margin: 'auto',
        }}>
            <div>
                <div style={{
                    padding: '0rem'
                }}>
                    <h3 style={{
                        margin: '1rem 0rem'
                    }}>장바구니</h3>
                </div>
                <div style={{
                    marginBottom: '3rem'
                }}>
                    <CartHeader/>
                </div>
                <div style={{
                    marginBottom: '3rem'
                }}>
                    <CartContents/>
                </div>
                <div>
                    <CartTotal/>
                </div>
            </div>
        </div>
    )
}

export default Cart