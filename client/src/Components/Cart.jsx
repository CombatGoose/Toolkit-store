import { useDispatch, useSelector } from 'react-redux';

import { removeElFromCart, amountIncrement, amountDecrement } from '../redux/reducers/productsReducer';

const Cart = () => {
    const dispatch = useDispatch();

    const cart = JSON.parse(localStorage.getItem('cart'));

    const handleItemDelete = (candidateId) => {
        dispatch(removeElFromCart(candidateId));
    }

    const handleAmountDecrement = (candidateId) => {
        dispatch(amountDecrement(candidateId))
    }

    const handleAmountIncrement = (candidateId) => {
        dispatch(amountIncrement(candidateId))
    }

    const cardsCollection = cart.map(el => (
        <div key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.price}</p>
            <div>
                <button onClick={handleAmountDecrement(el.id)}>-</button>
                <p>{el.amount}</p>
                <button onClick={handleAmountIncrement(el.id)}>+</button>
            </div>
            <button onClick={(e) => handleItemDelete(el.id)}>Delete</button>
        </div>
    ));

    return (
        <div>
            {cardsCollection}
        </div>
    );
}

export default Cart;