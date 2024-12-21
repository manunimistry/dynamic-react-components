import React from 'react'
import './Web.css';

const Form = () => {
    const [ingredients, setIngredients] = React.useState([ ])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
      event.preventDefault()
        console.log("Form Submitted!")

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        
    }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit} className='form-design'>
      <input name='ingredient' className='input-design'/>
      <button className='form-button' >Add ingredients</button>
      <ul>{ingredientsListItems}</ul>
    </form>
  </div>
  )
}

export default Form
