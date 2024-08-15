type Category = "population" | "size";

const categories: Category[] = ["population", "size"];

const getRandomCategory = (): Category => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

export default getRandomCategory;