export const allowedCategories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
] 


export function isValidCategory(category: any) {
    return allowedCategories.includes(category);
}