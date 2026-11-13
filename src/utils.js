// "./assets/images/x.jpg" (from data.json) -> "/assets/images/x.jpg" (served from the public folder)
export const imagePath = (path) => path.replace("./", "/");

export const formatPrice = (amount) => `$${amount.toFixed(2)}`;