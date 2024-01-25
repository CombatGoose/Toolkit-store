import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../redux/reducers/productsReducer';

const Main = () => {
    const dispatch = useDispatch();
    const cardsList = useSelector(state => state.products.list);
    const cart = useSelector(state => state.products.cart);

    const handleAddToCart = (candidateId) => {
        dispatch(addToCart(candidateId))
        console.log(cart)
    }

    const cardsCollection = cardsList.map(el => (
        <div key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.price}</p>
            <button onClick={(e) => handleAddToCart(el.id)}>Add to cart</button>
        </div>
    ));

    return (
        <div>
            {cardsCollection}
        </div>
    );
}

export default Main;