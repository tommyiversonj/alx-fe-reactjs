import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set) => ({
    recipes: [],
    favorite: [],
    recommendations: [],
    searchTerm: '',
    filteredRecipes: [],

    // Set all recipes at once
    setRecipes: (recipes) => set({ recipes }),

    // Search & filter functionality
    setSearchTerm: (term) => {
        set({ searchTerm: term });
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(term.toLowerCase())
            ),
        }));
    },
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),

    recommendations: [],
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),

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
