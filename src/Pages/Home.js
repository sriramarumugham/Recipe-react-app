import React, { useEffect, useState } from "react";
import customFetch from "../Utils/api";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode == 13 && input.legth !== 0) {
        // console.log("call", input);
        // const value = input;
        fetchData();

        // here is the probelm in use effect
      }
    });
  });
  //here is the problem
  const fetchData = async () => {
    const value = input;
    console.log("input", value);
    const request = await customFetch(value);
    const response = await request;
    console.log(response);
  };

  // const fetchRequest = async (input) => {
  //   const request = await customFetch(input);
  //   const response = await request;
  //   if (response.success) {
  //     const objects = response.data.map((obj) => {
  //       const { recipe } = obj;
  //       return recipe;
  //     });
  //     // console.log(objects);
  //     setRecipes(objects);
  //     // console.log(recipes);
  //   }
  // };
  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <button
        onClick={() => {
          fetchRequest(input);
        }}
      >
        search
      </button> */}
      <div>{/* <Card /> */}</div>
    </div>
  );
};

export default Home;
