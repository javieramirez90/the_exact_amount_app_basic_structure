class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    ingredients,
    steps,
    isGluttenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.affordability = affordability;
      this.complexity = complexity;
      this.imageUrl = imageUrl;
      this.ingredients = ingredients;
      this.steps = steps;
      this.isGluttenFree = isGluttenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
  }
};

export default Meal;