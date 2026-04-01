import React, { useState, Suspense } from 'react';
import Toolcards from '../toolcards/Toolcards.jsx';
import Cart from '../cart/Cart.jsx';


const Main = () => {
    const [view, setView] = useState('products');
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prev => [...prev, item]);
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const dataPromise = fetch('/data.json').then(res => res.json());

    return (
        <div className='text-center mx-20 my-20'>
            <h1 className='text-black font-extrabold text-3xl'>Premium Digital Tools</h1>
            <p className='text-black/70 text-xs pt-3 '>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

            <div className='mt-5 border w-fit mx-auto rounded-full p-1 text-gray-300'>
                <button 
                    className={`btn text-sm p-2 px-4 rounded-4xl ${view === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'text-black'}`}
                    onClick={() => setView('products')}
                >
                    Products
                </button>
                <button 
                    className={`btn text-sm p-2 px-4 rounded-4xl ${view === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'text-black'}`}
                    onClick={() => setView('cart')}
                >
                    Cart ({cartItems.length})
                </button>
            </div>
            <div className="mt-10">
{view === 'products' && (
  <Suspense fallback={<p className='text-center py-8'>Loading products...</p>}>
    <Toolcards dataPromise={dataPromise} addToCart={addToCart} />
  </Suspense>
)}
                {view === 'cart' && <Cart cartItems={cartItems} onRemove={removeFromCart} />}
            </div>
        </div>
    );
};

export default Main;