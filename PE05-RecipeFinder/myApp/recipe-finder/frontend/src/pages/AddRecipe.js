import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddRecipe({ onAddRecipe }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://vigilant-space-tribble-v66j55p6g4jqcpv67-5000.app.github.dev/api/recipes", 
        { name, ingredients: ingredients.split(","), instructions }
      );
      setMessage("Recipe added successfully!");
      onAddRecipe(response.data);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setMessage("Error adding recipe!");
    }
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
