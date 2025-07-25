import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onCancel }) => {
    const { updateRecipe } = useRecipeStore();
    const [name, setName] = useState(recipe.name);
    const [description, setDescription] = useState(recipe.description);

    const handleSubmit = (event) => {
        event.preventDefault(); // ✅ Required check
        updateRecipe({ ...recipe, name, description });
        onCancel(); // Close the form after updating
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Recipe Name</label>
                <input
                    type="text"
                    className="w-full border rounded p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="block">Description</label>
                <textarea
                    className="w-full border rounded p-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="flex gap-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Save
                </button>
                <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditRecipeForm;
