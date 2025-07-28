// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
    const recommendations = useRecipeStore(state => state.recommendations);
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

    useEffect(() => {
        generateRecommendations(); // generate on mount
    }, []);

    return (
        <div className="my-6">
            <h2 className="text-xl font-bold">Recommended for You</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations yet.</p>
            ) : (
                recommendations.map(recipe => (
                    <div key={recipe.id} className="p-3 border rounded mb-2">
                        <h3 className="font-semibold">{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecommendationsList;
