function ListOfRecipes({label, image, calories, ingredient}){
return(
    <div>
        <div className='container'>
        <h2>{label}</h2>
        </div>
        <div className='container'>
        <img className="photo" src={image} alt='photoRecipes'/>
        </div>
        
        <ul className='list'>
            {ingredient.map((item, i) =>(
                <li key={i}><img className="icon" src='https://img.icons8.com/fluency/512/checked-radio-button.png' alt='icon'/>{item}</li>
            ))
            }
        </ul>
        <div className='container'>
        <p className="ccal">{calories.toFixed()} calories</p>
        </div>
    </div>
)
}
export default ListOfRecipes