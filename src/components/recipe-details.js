import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCoffee } from "../actions";

const RecipeDetails = (props) => {
  const posts = useSelector((state) => state.coffee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCoffee]);

  const recipe = useSelector(() => {
    return posts.find((recipe) => {
      return recipe.id === parseInt(props.match.params.id)
    })
  })

  console.log(recipe)
  return (
      <div>
        <Link to="/">Back To Index</Link>
          <h1>Recipe</h1>
          <hr></hr>
          <p>1. {recipe.title}</p>
          <p>2. </p>
          <p>3. </p>
          <p>4. </p>
          <p>5. </p>
      </div>
    )
}

export default RecipeDetails;