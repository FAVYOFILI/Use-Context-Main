import React, { useEffect, useState } from "react";
import Card, { type CardProps } from "./ModalCard";
import axios from "axios";

const Modal: React.FC = () => {
  const [data, setData] = useState<CardProps[]>([]);
  const [modalview, setModalView] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error, "Error fecthing data");
      }
    };
    fetchProduct();
  }, []);

  const handleModal = (id: number) => {
    console.log("i have been clicked", id);
    const findCard = data.find((e) => e.id === id);

    if (findCard) {
      setSelectedCard(findCard);
      setModalView(true);
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-full h-screen gap-6">
      {data.map((e) => (
        <Card
          id={e.id}
          title={e.title}
          image={e.image}
          description={e.description}
          category={e.category}
          price={e.price}
          handleModal={handleModal}
        />
      ))}

      {modalview && selectedCard && (
        <div
          className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center"
          onClick={() => setSelectedCard(null)}
        >
          <div
            onClick={() => setModalView(false)}
            className="w-[300px] min-h-[400px] pb-7 h-auto text-[white] rounded-[12px]  bg-[#6D0747] flex flex-col shadow-2xl items-center justify-between"
          >
            <div className="w-full h-[200px] rounded-t-[10px] items-center justify-center flex bg-white">
              <img
                src={selectedCard.image}
                alt=""
                className=" h-full rounded-t-[10px] object-fit"
              />
            </div>

            <div className="w-[90%] min-h-[200px] flex flex-col justify-between gap-5 py-5">
              <h3 className="font-semibold text-[20px]">
                {selectedCard.title}
              </h3>
              <p>{selectedCard.description}</p>
              <div className="flex w-full justify-between">
                <h3>{selectedCard.category}</h3>
                <h3>
                  price:{" "}
                  <span className="text-[17px] font-semibold">
                    {selectedCard.price}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal