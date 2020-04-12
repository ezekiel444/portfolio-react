import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

const initialState = {
  isLoading: false,
  success: [],
  failed: "",
};

// const reducer = (state, action) => {
//   switch (action.type) {
//   }
// };

export default function Images() {
  const [success, setSuccess] = useState([]);

  const apiData = async () => {
    const fetchData = await (
      await fetch("https://jsonplaceholder.typicode.com/photos")
    ).json();

    setSuccess(fetchData);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      {success.map((imgUrl) => {
        return (
          <div key={imgUrl.id}>
            <Link to={`images/${imgUrl.id}`}> {imgUrl.title} </Link>
          </div>
        );
      })}
    </>
  );
}
