import React from 'react';
import { useParams, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import recipesData from './data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = recipesData.find(r => r.id === parseInt(id));

    if (!recipe) {
        return <div className="p-4 text-center">Recipe not found.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
                ← Back to Home
            </Link>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full max-w-xl mx-auto rounded-lg shadow-md mb-6"
                />

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {recipe.ingredients?.map((ingredient, index) => (
                            <li key={index} className="text-gray-700">
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        {recipe.instructions?.map((step, index) => (
                            <li key={index} className="text-gray-700">
                                {step}
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </div>
    );
};

export default RecipeDetail;
