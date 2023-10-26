export default getIngredients = (data) => {
  try {
    if (!data) return []
    const ingredients = []
    for (i = 1; i <= 20; i++) {
      const ingredient = data[`strIngredient${i}`]
      if (ingredient.trim()) {
        ingredients.push(ingredient)
      }
    }
    // we use set to remove the repeated ingredients of the recipe
    const set = new Set(ingredients)
    return Array.from(set)
  } catch (error) {
  }
}