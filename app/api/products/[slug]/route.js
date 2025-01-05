import products from "@/data/products"; 

export async function GET(request, { params }) {
  const { slug } = params; 

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return new Response("Product not found", { status: 404 });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
