import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = ({
    list: [
      {
        id: 'yhGb3Kc8',
        name: 'Quantum Blender',
        price: 89.99,
        amount: 0
      },
      {
        id: 'uG7l1PmR',
        name: 'Lunar Smartwatch',
        price: 129.95,
        amount: 0
      },
      {
        id: 'k9iJ2LpM',
        name: 'Solar-Powered Backpack',
        price: 74.99,
        amount: 0
      },
      {
        id: 'p4dXoWfA',
        name: 'Velocity Gaming Mouse',
        price: 49.99,
        amount: 0
      },
      {
        id: 'cR6mV8nQ',
        name: 'Zenith Noise-Canceling Headphones',
        price: 179.99,
        amount: 0
      },
      {
        id: 'aN3lP9oQ',
        name: 'Eco-Friendly Water Bottle',
        price: 19.99,
        amount: 0
      },
      {
        id: 'fK2hM8pN',
        name: 'Nova LED Desk Lamp',
        price: 34.95,
        amount: 0
      },
      {
        id: 'bZ4qX5wR',
        name: 'Stealth Fitness Tracker',
        price: 59.99,
        amount: 0
      },
      {
        id: 'dT6oL9kP',
        name: 'Galactic Virtual Reality Headset',
        price: 199.99,
        amount: 0
      },
      {
        id: 'mJ7sP4oQ',
        name: 'Terra Cotta Cooking Set',
        price: 42.50,
        amount: 0
      },
      {
        id: 'zG3wK7oN',
        name: 'Nimbus Air Purifier',
        price: 129.99,
        amount: 0
      },
      {
        id: 'rH2oV4fK',
        name: 'Solar Eclipse Sunglasses',
        price: 14.99,
        amount: 0
      },
      {
        id: 'gN5sH8rM',
        name: 'Titan Power Bank (20,000mAh)',
        price: 39.95,
        amount: 0
      },
      {
        id: 'wR6lV8nS',
        name: 'Celestial Aromatherapy Diffuser',
        price: 29.99,
        amount: 0
      },
      {
        id: 'kU3mP7oQ',
        name: 'Echo Bamboo Fiber Bed Sheets',
        price: 69.99,
        amount: 0
      },
      {
        id: 'hJ6oP4nA',
        name: 'Spark Wireless Charging Pad',
        price: 24.99,
        amount: 0
      },
      {
        id: 'zR7mK8nQ',
        name: 'Alpine Trail Hiking Boots',
        price: 79.99,
        amount: 0
      },
      {
        id: 'pX5oR8nM',
        name: 'Nebula Yoga Mat',
        price: 49.95,
        amount: 0
      },
      {
        id: 'cF9rS7oQ',
        name: 'SolarFlare Portable Grill',
        price: 89.99,
        amount: 0
      },
      {
        id: 'sF4lT8pN',
        name: 'Zen Meditation Cushion',
        price: 29.50,
        amount: 0
      }
    ],
    cart: JSON.parse(localStorage.getItem('cart')) || []
});


export const getList = createAction('get/list');

export const addToCart = createAction('add/cart', (candidateId) => ({
  payload: { candidateId }
}));

export const removeElFromCart = createAction('delete/cart', (candidateId) => ({
  payload: { candidateId }
}));

export const amountIncrement = createAction('amount/increment', (candidateId) => ({
  payload: { candidateId }
}));

export const amountDecrement = createAction('amount/subtraction', (candidateId) => ({
  payload: { candidateId }
}));

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getList, (state) => {})
    .addCase(addToCart, (state, action) => {
      const foundCard = state.list.find(item => item.id === action.payload.candidateId);
      if (foundCard) {
        const newCart = [
          ...state.cart,
          {
            id: foundCard.id,
            name: foundCard.name,
            price: foundCard.price
          }
        ];
        state.cart = newCart;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      };
    })
    .addCase(removeElFromCart, (state, action) => {
      state.cart = [
        ...state.cart.filter(item => item.id !== action.payload.candidateId),
      ];
      const newCart = state.cart.filter(item => item.id !== action.payload.candidateId);
      localStorage.setItem('cart', JSON.stringify(newCart));
    })
    .addCase(amountIncrement, (state, action) => {
      const currentProduct = state.list.find(item => item.id === action.payload.candidateId);
      currentProduct.amount++;
    })
    .addCase(amountDecrement, (state, action) => {
      const currentProduct = state.list.find(item => item.id === action.payload.candidateId);
      currentProduct.amount--;
    })
});

export default usersReducer;