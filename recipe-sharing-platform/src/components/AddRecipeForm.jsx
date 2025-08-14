import React, { useState, useEffect } from 'react';
import recipesData from './data.json'; // Assuming you have a JSON file with recipe data


const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required.";
        if (!ingredients.trim() || ingredients.split('\n').length < 2) {
            newErrors.ingredients = "Please list at least two ingredients.";
        }
        if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If valid, process form data
        console.log({ title, ingredients, steps });
        alert("Recipe submitted!");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Add New Recipe</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-4"
            >
                {/* Title */}
                <div>
                    <label className="block font-semibold mb-1">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                {/* Ingredients */}
                <div>
                    <label className="block font-semibold mb-1">Ingredients (one per line)</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="4"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
                </div>

                {/* Steps */}
                <div>
                    <label className="block font-semibold mb-1">Preparation Steps</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows="6"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full md:w-auto"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
