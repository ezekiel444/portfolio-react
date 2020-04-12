import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function AllImages() {
  const { id } = useParams();

  const [image, setImage] = useState([]);

  const fetchImg = useCallback(async () => {
    const specificImg = await (
      await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    ).json();
    setImage(specificImg);
  }, [id]);

  useEffect(() => {
    fetchImg();
  }, [fetchImg]);

  return <div>{image.title}</div>;
}

export default AllImages;
