export default getIngredients = (data) => {
  const ingredients = []
  console.log(data)
  for (i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`]
    if (ingredient.trim()) {
      ingredients.push(ingredient)
      console.log(ingredient)
    }
  }
  console.log(ingredients)

  return ingredients
}