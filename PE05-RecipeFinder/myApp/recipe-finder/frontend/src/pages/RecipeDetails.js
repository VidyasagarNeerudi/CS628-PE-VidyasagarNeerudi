import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", ingredients: "", instructions: "" });

  useEffect(() => {
    axios
      .get(`https://vigilant-space-tribble-v66j55p6g4jqcpv67-5000.app.github.dev/api/recipes/${id}`)
      .then((response) => {
        const { name, ingredients, instructions } = response.data;
        setRecipe(response.data);
        setFormData({ name, ingredients: ingredients.join(", "), instructions });
      })
      .catch(console.error);
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`https://vigilant-space-tribble-v66j55p6g4jqcpv67-5000.app.github.dev/api/recipes/${id}`);
    navigate("/");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios.put(`https://vigilant-space-tribble-v66j55p6g4jqcpv67-5000.app.github.dev/api/recipes/${id}`, {
      name: formData.name,
      ingredients: formData.ingredients.split(","),
      instructions: formData.instructions,
    });
    setEditMode(false);
    setRecipe({ ...recipe, ...formData });
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{editMode ? "Edit Recipe" : recipe.name}</h1>
      {editMode ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="text"
            value={formData.ingredients}
            onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
            required
          />
          <textarea
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <>
          <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          <p>Instructions: {recipe.instructions}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default RecipeDetails;
