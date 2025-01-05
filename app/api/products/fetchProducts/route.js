import products from "@/data/products";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  let filteredProducts = products;

  if (type) {
    filteredProducts = filteredProducts.filter((product) => product.type === type);
  }

  return new Response(JSON.stringify(filteredProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
