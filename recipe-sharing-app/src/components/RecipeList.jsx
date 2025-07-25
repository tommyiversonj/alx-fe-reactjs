import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const { recipes, searchTerm, setSearchTerm, deleteRecipe } = useRecipeStore();

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
