import './App.css';
import { useCallback, useEffect, useState } from 'react';
import video from './food.mp4'
import ListOfRecipes from './ListOfRecipes';

function App() {

  const API_ID ='abfb5e50';
  const API_KEY = 'dbe3619ca2a2e76e3e270e12cda037fe'

  const [mySerch, setMySerch]= useState('');
  const [myRecipes, setMyRecipes]= useState([])
  const [word, setWord] = useState('fish')

 

  const recipesAPI = useCallback(async()=>{ 
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    setMyRecipes(data.hits);
  },[word])

  useEffect(() => {
    recipesAPI()
   },[recipesAPI])

  const searchRecipes= (e) =>{
    setMySerch(e.target.value)
  }
  const stopSearch = (e) =>{
    e.preventDefault()
    setWord(mySerch)
  }
  
  return (
    <div className="App">
  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
  <h1>Find a Recipe</h1>
  </div>
  <div className="container">
    <form onSubmit={stopSearch}>
      <input className='search' placeholder='search...' onChange={searchRecipes} value={mySerch}></input>
      <div className="container">
  <button>
      <img src='https://img.icons8.com/fluency/48/000000/fry.png' alt='search'/>
    </button>
  </div>
    </form>
    </div>
  
<div>
  {myRecipes.map((element, item) =>(
    <ListOfRecipes key={item}
     label={element.recipe.label}
     image={element.recipe.image}
     calories={element.recipe.calories}
     ingredient={element.recipe.ingredientLines}
    />
  ))}
  </div>
  </div>
  );
}

export default App;
