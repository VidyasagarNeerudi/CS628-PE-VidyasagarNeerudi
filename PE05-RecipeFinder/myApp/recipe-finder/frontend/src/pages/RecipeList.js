import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddRecipe from "./AddRecipe"; // Import AddRecipe component

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://vigilant-space-tribble-v66j55p6g4jqcpv67-5000.app.github.dev/api/recipes"
        );
        setRecipes(response.data);
      } catch (err) {
        setError("Failed to load recipes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]); // Add the new recipe to the list
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://vigilant-space-tribble-v66j55p6g4jqcpv67-5000.app.github.dev/api/recipes/${id}`
      );
      setRecipes(recipes.filter((recipe) => recipe._id !== id)); // Remove deleted recipe from state
    } catch (error) {
      setError("Error deleting recipe!");
    }
  };

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Recipe List</h1>
      <Link to="/add">Add New Recipe</Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
            <button onClick={() => handleDelete(recipe._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <AddRecipe onAddRecipe={handleAddRecipe} /> {/* Pass the function here */}
    </div>
  );
}

export default RecipeList;
