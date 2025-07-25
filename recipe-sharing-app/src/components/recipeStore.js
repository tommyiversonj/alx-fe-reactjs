import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    setSearchTerm: (term) => {
        set({ searchTerm: term });
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(term.toLowerCase())
            ),
        }));
    },

    addRecipe: (recipe) =>
        set((state) => ({
            recipes: [...state.recipes, { ...recipe, id: uuidv4() }],
        })),

    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),

    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? { ...updatedRecipe } : recipe
            ),
        })),

    setSearchTerm: (term) => set({ searchTerm: term }),
}));
