import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../store/modules/cartSlice';

const Product = ({item}) => {
    const {id,title,price,description,image} = item
    const {carts} = useSelector(state => state.cartR)
    const dispatch = useDispatch()
    return (
        <article>
            <div>
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <p>
                {
                    carts.find( x => x.id === id) ?
                    <button onClick={()=> dispatch(removeCart(id))} className="off">주문취소</button>
                    // 버튼 id가 일치해야함
                    :
                     <button onClick={()=> dispatch(addCart(item))}>주문하기</button>
                }
            <span>{price} 원</span>
            </p>
        </article>
    );
};

export default Product;