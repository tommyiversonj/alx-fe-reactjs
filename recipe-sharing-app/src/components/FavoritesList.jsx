// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const favorites = useRecipeStore(state => state.favorites);

    const favoriteRecipes = favorites
        .map(id => recipes.find(recipe => recipe.id === id))
        .filter(Boolean);

    return (
        <div className="my-6">
            <h2 className="text-xl font-bold">My Favorite Recipes</h2>
            {favoriteRecipes.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                favoriteRecipes.map(recipe => (
                    <div key={recipe.id} className="p-3 border rounded mb-2">
                        <h3 className="font-semibold">{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritesList;
