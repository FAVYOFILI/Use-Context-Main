import React from 'react'

export interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
  handleModal: (id: number) => void;

}

const Card:React.FC<CardProps> = ({id,image,title,description,category,price, handleModal}) => {
  return (
    <div
      onClick={() => handleModal(id)}
      className="w-[300px] min-h-[400px] pb-7 h-auto text-[white] rounded-[12px] bg-red-800 flex flex-col shadow-2xl items-center justify-between transition-transform duration-300 scale-100 opacity-100 cursor-pointer"
    >
      <div className="w-full h-[200px] rounded-t-[10px] items-center justify-center flex bg-white">
        <img
          src={image}
          alt="" 
          className=" h-full rounded-t-[10px] object-fit"
        />
      </div>
    
      <div className="w-[90%] min-h-[200px] flex flex-col justify-between gap-5 py-5">
        <h3 className="font-semibold text-[20px]">{title}</h3>
        <p>{description}</p>
        <div className="flex w-full justify-between">
          <h3>{category}</h3>
          <h3>
            price: <span className="text-[17px] font-semibold">{price}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card