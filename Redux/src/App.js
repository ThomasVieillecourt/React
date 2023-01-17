import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPictureData } from "./features/picture.slice";

const App = () => {
  //useDispatch permet de donner les données aux store
  const dispatch = useDispatch();

  //useSelector sert à faire appel aux données dans le store, ici il fait appel aux données du state
  const picsData = useSelector((state) => state.pictures.pictures);

  const getPictures = () => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPictureData(res.data)));
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form getPicture={getPictures} />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
