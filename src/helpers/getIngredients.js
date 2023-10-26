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
    const set = new Set(ingredients)
    return Array.from(set)
  } catch (error) {
  }
}