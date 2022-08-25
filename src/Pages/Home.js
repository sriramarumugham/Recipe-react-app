import React, { useEffect, useState, useCallback } from "react";
import customFetch from "../Utils/api";
import Card from "../Components/Card";
import Styles from "../Styles/home.module.css";
const Home = () => {
  const [userText, setUserText] = useState("");

  const [recipes, setRecipes] = useState([]);

  const handleUserKeyPress = (event) => {
    const { key, keyCode } = event;
    console.log("pressed");
    if (keyCode === 13) {
      fetchRequest(userText);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  const fetchRequest = async (input) => {
    console.log("called", input);
    const request = await customFetch(input);
    const response = await request;
    if (response.success) {
      const objects = response.data.map((obj) => {
        const { recipe } = obj;
        return recipe;
      });
      console.log(objects);
      setRecipes(objects);
    }
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        className={Styles.search}
        type="search"
        placeholder="Search a recipe"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />

      <div className={Styles.list}>
        {recipes.map((recipe, index) => {
          return <Card props={recipe} key={`index${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Home;

// const newHome = () => {

// };
