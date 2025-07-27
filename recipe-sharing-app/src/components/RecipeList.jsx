import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const favoriteRecipes = ({ recipeId }) => {
    const favorites = useRecipeStore(state => state.favorites);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    const isFavorite = favorites.includes(recipeId);

    const toggleFavorite = () => {
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
    };
    return (
        <button
            onClick={toggleFavorite}
            className="px-2 py-1 text-sm bg-yellow-400 rounded"
        >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    );
};


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
