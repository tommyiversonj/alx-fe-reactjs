import { useState } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

export default App;
