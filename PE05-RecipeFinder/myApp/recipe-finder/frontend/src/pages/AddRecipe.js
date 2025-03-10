import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/recipes", {
      name,
      ingredients: ingredients.split(","),
      instructions,
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Recipe Name" onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Ingredients (comma separated)" onChange={(e) => setIngredients(e.target.value)} required />
        <textarea placeholder="Instructions" onChange={(e) => setInstructions(e.target.value)} required />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
