import { createAction, createReducer } from '@reduxjs/toolkit';

const { nanoid } = require('nanoid');

const initialState = ({
    list: [
        {
            id: 'yhGb3Kc8',
            name: 'Quantum Blender',
            price: '$89.99'
          },
          {
            id: 'uG7l1PmR',
            name: 'Lunar Smartwatch',
            price: '$129.95'
          },
          {
            id: 'k9iJ2LpM',
            name: 'Solar-Powered Backpack',
            price: '$74.99'
          },
          {
            id: 'p4dXoWfA',
            name: 'Velocity Gaming Mouse',
            price: '$49.99'
          },
          {
            id: 'cR6mV8nQ',
            name: 'Zenith Noise-Canceling Headphones',
            price: '$179.99'
          },
          {
            id: 'aN3lP9oQ',
            name: 'Eco-Friendly Water Bottle',
            price: '$19.99'
          },
          {
            id: 'fK2hM8pN',
            name: 'Nova LED Desk Lamp',
            price: '$34.95'
          },
          {
            id: 'bZ4qX5wR',
            name: 'Stealth Fitness Tracker',
            price: '$59.99'
          },
          {
            id: 'dT6oL9kP',
            name: 'Galactic Virtual Reality Headset',
            price: '$199.99'
          },
          {
            id: 'mJ7sP4oQ',
            name: 'Terra Cotta Cooking Set',
            price: '$42.50'
          },
          {
            id: 'zG3wK7oN',
            name: 'Nimbus Air Purifier',
            price: '$129.99'
          },
          {
            id: 'rH2oV4fK',
            name: 'Solar Eclipse Sunglasses',
            price: '$14.99'
          },
          {
            id: 'gN5sH8rM',
            name: 'Titan Power Bank (20,000mAh)',
            price: '$39.95'
          },
          {
            id: 'wR6lV8nS',
            name: 'Celestial Aromatherapy Diffuser',
            price: '$29.99'
          },
          {
            id: 'kU3mP7oQ',
            name: 'Echo Bamboo Fiber Bed Sheets',
            price: '$69.99'
          },
          {
            id: 'hJ6oP4nA',
            name: 'Spark Wireless Charging Pad',
            price: '$24.99'
          },
          {
            id: 'zR7mK8nQ',
            name: 'Alpine Trail Hiking Boots',
            price: '$79.99'
          },
          {
            id: 'pX5oR8nM',
            name: 'Nebula Yoga Mat',
            price: '$49.95'
          },
          {
            id: 'cF9rS7oQ',
            name: 'SolarFlare Portable Grill',
            price: '$89.99'
          },
          {
            id: 'sF4lT8pN',
            name: 'Zen Meditation Cushion',
            price: '$29.50'
          }
    ]
});

export const getList = createAction('get/list');

const usersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getList, (state) => {
          state.list = [
            ...state.list
          ];
        });
});

export default usersReducer;