import { Link } from 'react-router-dom';
import './ProductItem.css'

interface Props  {
    view: {
        userId: number;
        id: number,
        title: string;
        body: string;
    }
    key: number
}

const ProductItem = ({view}: Props) => {
    return(
        <Link to={`/detail/${view.id}/review/look`}>
            <div className='ProductItem_Window'>
                <div className='ProductItem_Image_Window'>
                    <img id='ProductItem_Image' src='https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG' alt='google_logo'/>
                </div>
                <div className='ProductItem_ProductName'>
                    {view.title}
                </div>
                <div className='ProductItem_Seller'>
                    {view.userId}
                </div>
                <div className='ProductItem_ProductPrice'>
                    {view.id*1000}<span id='ProductItem_Price_Unit'>원</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem