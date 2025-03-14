import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/${id}`)
      .then((response) => setRecipe(response.data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/recipes/${id}`, recipe);
      navigate("/");
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;
