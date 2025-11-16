export const allowedCategories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
] 

export function isValidCategory(category: any) {
    return allowedCategories.includes(category);
}