import products from "@/data/products";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const showHome = searchParams.get('showHome');

  let filteredProducts = products;

  if (type) {
    filteredProducts = filteredProducts.filter((product) => product.type === type);
  }

  if (showHome) {
    const showHomeValue = showHome === "true"; 
    filteredProducts = filteredProducts.filter((product) => product.showHome === showHomeValue);
  }

  return new Response(JSON.stringify(filteredProducts), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
