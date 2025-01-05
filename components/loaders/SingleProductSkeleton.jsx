function SingleProductSkeleton() {
    return (
      <div className="w-auto block mx-auto animate-pulse">
        <div className="relative w-auto max-w-[280px] h-[230px] bg-gray-200 rounded-2xl overflow-hidden">
          <div className="h-full w-full  bg-gray-300"></div>
        </div>
  
        <div className="mt-4">
          <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        </div>
  
        <div className="mt-2 flex items-center space-x-2">
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>
        <div className="h-5 w-5 bg-gray-300 rounded"></div>

        <div className="h-6 w-8 bg-gray-300 rounded"></div>

         
        </div>
  
        <div className="mt-2 flex items-center space-x-2">
          <div className="h-7 w-16 bg-gray-300 rounded"></div>
          <div className="h-7 w-16 bg-gray-300 rounded"></div>
          <div className="h-7 w-12 rounded-lg bg-gray-300 "></div>
        </div>
  
      
      </div>
    );
  }
  
  export default SingleProductSkeleton;