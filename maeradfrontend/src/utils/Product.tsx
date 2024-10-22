enum Category {
  Apparel = 'Apparel',
  Home = 'Home',
  Accessories = 'Accessories'
}

export async function fetchProductsByCategory(category: Category) {
  const res = await fetch(`http://127.0.0.1:8000/all/`);
  const data = await res.json();
  
  // Assuming the product object has a 'category' field
  return data.filter((product: { category: string }) => product.category === category);
}