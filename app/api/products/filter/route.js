export async function POST(req) {
    try {
      // Parse the incoming request body
      const filters = await req.json();
  
  
      // Forward the filters to the external API
      const externalResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/external/product/filter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters), // Ensure the body is properly stringified
          duplex: "half", // Required in Node.js for POST requests with a body
        }
      );
  
      // Check if the external API request was successful
      if (!externalResponse.ok) {
        const errorText = await externalResponse.text();
        console.error("Error from external API:", errorText);
        return new Response(
          JSON.stringify({
            success: false,
            message: "External API Error",
            error: errorText,
          }),
          { status: externalResponse.status }
        );
      }
  
      // Parse the response from the external API
      const externalData = await externalResponse.json();
  
  
      // Send the external API response back to the client
      return new Response(JSON.stringify({ success: true, data: externalData }), {
        status: 200,
      });
    } catch (error) {
      console.error("Error in API POST:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Internal Server Error",
          error: error.message || error,
        }),
        { status: 500 }
      );
    }
  }
  