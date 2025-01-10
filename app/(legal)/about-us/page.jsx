import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-satoshi">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl font-light">
            Welcome to XORAR – where creativity meets comfort.
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Story
          </h2>
          <p className="text-lg leading-8 text-gray-700 mb-8 text-center">
            Welcome to XORAR – an Indian brand committed to redefining everyday
            fashion through our exclusive collection of T-shirts and hoodies.
            Operating from the cultural heart of Kolkata, West Bengal, we take
            pride in designing apparel that blends creativity, comfort, and
            individuality.
          </p>
          <p className="text-lg leading-8 text-gray-700 mb-8 text-center">
            Our team of talented designers pours passion and innovation into
            every piece, ensuring that our products are as unique as the people
            who wear them. At XORAR, we believe fashion is more than just
            clothing – it’s a canvas for self-expression. That's why each of our
            designs tells a story, connects with our audience, and resonates
            with diverse styles and preferences.
          </p>
        </div>
      </section>

      {/* Founders and Team */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Founder */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Dipanjan Baidya</h3>
              <p className="text-gray-600">Founder</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Shivam Agarwal</h3>
              <p className="text-gray-600">Founder</p>
            </div>
            {/* Team Members */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Ronit Prasad</h3>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ishan Biswas</h3>
              <p className="text-gray-600">Team Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Address */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Office
          </h2>
          <p className="text-lg text-gray-700 text-center mb-4">
            Block ED, Rajdanga Main Road, Near Acropolis Mall, Kasba, Kolkata -
            700107, West Bengal.
          </p>
        </div>
      </section>

     
    </div>
  );
};

const Page = () => {
	  return (<AboutUs />);
}


export default Page;
