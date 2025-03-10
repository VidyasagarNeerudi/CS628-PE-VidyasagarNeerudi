import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/recipes/${id}`).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/recipes/${id}`);
    navigate("/");
  };

  return recipe ? (
    <div>
      <h1>{recipe.name}</h1>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Instructions: {recipe.instructions}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default RecipeDetails;
