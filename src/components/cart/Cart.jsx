import React from 'react';

const Cart = ({cartItems, onRemove}) => {
    return (
        <div className='container mx-auto p-4 w-full border'>
            {cartItems.map(item => (
                <div key={item.id} className=' card w-full bg-base-100 shadow p-4 '>
                   
                    <div className='flex justify-between shadow p-4'>
                         <img className=' h-10 w-10' src={item.icon} alt={item.name} />

                         <div>
                                <h3 className='text-xl font-bold mb-2 text-center'>{item.name}</h3>
                    <p className='text-2xl font-bold text-center mb-4'>${item.price}</p>
                         </div>
                          <button 
                        className=' text-red-500'
                        onClick={() => onRemove(item.id)}
                    >
                       remove
                    </button>
                    </div>
                   
                    
                </div>
            ))}
            {cartItems.length === 0 && (
                <p className='col-span-3 text-center text-gray-500 py-8'>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;