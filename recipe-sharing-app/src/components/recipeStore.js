import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',

    addRecipe: (recipe) =>
        set((state) => ({
            recipes: [...state.recipes, recipe],
        })),

    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),

    setSearchTerm: (term) => set({ searchTerm: term }),
}));
