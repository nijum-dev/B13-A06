import React, { use } from 'react';


const Toolcards = ({dataPromise, addToCart}) => {
    const cardData=use(dataPromise);
    console.log(cardData);
    
    return  (
        <div className='container mx-auto w-300 grid grid-cols-3 gap-3'>
            {
                cardData.map(data => {
                    return(
                         <div className=" card w-96 bg-base-100 shadow-sm">
  <div  className="card-body shadow">
  <div className='flex justify-between'>
     <img className='w-fit border rounded-4xl p-2 text-gray-300' src={data.icon} alt="" />
     <span>
        <div className="badge badge-warning">{data.tag}</div>
     </span>
  </div>
    <div className=" justify-between">
      <h2 className="text-2xl font-bold mb-3">{data.name} </h2>
      <p className='text-gray-500'>{data.description}</p>
      <p className="text-xl font-bold mt-3">{data.price}
        <span className='text-gray-500 font-normal text-xs'>/{data.period}</span>
      </p>
    </div>
    <ul className="mt-3 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[0]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[1]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[2]}</span>
      </li>
     
    </ul>
    <div className="">
      <button className="btn btn-primary btn-block rounded-3xl" onClick={() => addToCart(data)}>Buy Now</button>
    </div>
  </div>
</div>
                    )
                })
            }
           
        </div>
    );
};

export default Toolcards;