import React from 'react';

interface Image {
  id: number;
  img: string;
  title: string;
  info: string;
}

interface Service {
  id: number;
  service: string;
  description: string;
}

const Home: React.FC = () => {
  const images: Image[] = [
    {
      id: 1,
      img: "/images/mercedes-benz-1744915_1280.jpg",
      title: "Mercedes",
      info: "Mercedes-Benz is a luxury automobile brand known for its innovation, performance, and premium design. It offers a wide range of vehicles, from sleek sedans like the C-Class and E-Class to powerful SUVs like the GLE and GLS. Renowned for its cutting-edge technology, Mercedes vehicles feature advanced safety systems, luxurious interiors, and strong engines that combine power with efficiency. The brand's hallmark is its blend of elegance, comfort, and engineering excellence, making it a top choice for drivers seeking high-end performance and style.",
    },
    {
      id: 2,
      img: "/images/audi-8336484_1280.jpg",
      title: "Audi",
      info: "Audi is a German luxury automobile manufacturer known for its high-quality engineering, sleek design, and cutting-edge technology. It offers a wide range of vehicles, from compact sedans to powerful SUVs and high-performance sports cars. Audi is renowned for its quattro all-wheel-drive system, advanced infotainment, and driver-assistance features. With a focus on innovation, Audi integrates electric and hybrid technology into its lineup, pushing towards a more sustainable future while maintaining its reputation for luxury and performance.",
    },
    {
      id: 3,
      img: "/images/vw-438825_1280.jpg",
      title: "Volkswagen",
      info: "Volkswagen, a German automaker founded in 1937, is known for producing reliable, high-quality vehicles. Famous models include the iconic Volkswagen Beetle and Golf, which blend style, comfort, and efficiency. Volkswagen offers a range of vehicles from compact cars to SUVs, prioritizing innovation, safety, and sustainability. In recent years, the brand has expanded into electric vehicles with its ID. series, aligning with its commitment to a greener future. Known for its engineering excellence, Volkswagen remains a leader in global automotive manufacturing.",
    },
  ];

  const services: Service[] = [
    {
      id: 1,
      service: "Vehicle Financing",
      description: "Provides flexible auto financing options, including loans and lease plans, to help customers purchase vehicles with manageable monthly payments.",
    },
    {
      id: 2,
      service: "Vehicle Customization",
      description: "Provides vehicle upgrade options, including interior and exterior modifications, custom paint jobs, performance enhancements, and accessories.",
    },
    {
      id: 3,
      service: "Car Rental & Leasing",
      description: "Provides short-term and long-term vehicle rental or leasing options for individuals and businesses seeking temporary transportation solutions.",
    },
    {
      id: 4,
      service: "Fleet Management",
      description: "Provides customized vehicle solutions and maintenance for businesses managing multiple vehicles, including leasing, servicing, and monitoring.",
    },
  ];

  return (
    <div className="h-auto">
      
      <div className="relative w-full h-[60vh] sm:h-[100vh] flex flex-col justify-center items-center bg-[url('/images/car-6761801_1280.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-white font-bold text-3xl sm:text-5xl border-[3px] sm:border-[5px] p-3 sm:p-5 border-white">
          Car Vibe.
        </h1>
        <p className="relative z-10 text-white text-sm sm:text-xl font-bold px-5 sm:px-10 my-5 sm:my-10">
          "Driven by Innovation, Powered for Tomorrow"
        </p>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center p-5 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold border-[2px] sm:border-[3px] border-blue-950 p-2">
          About Us
        </h2>
        <p className="px-5 sm:px-20 py-5 sm:py-10 w-[90%] sm:w-[80%] bg-gray-100 rounded my-5 text-blue-950 text-center shadow-lg text-sm sm:text-base">
          Here’s a polished message for a website that showcases vehicle images with a focus on providing the
          best display and information: "At Car Vibe., we are dedicated to delivering the most accurate and
          visually stunning representation of vehicles. Whether you're browsing for your dream car or exploring
          the latest models, our platform is designed to provide a seamless experience with high-quality images
          that capture every detail. We go beyond just looks—each image is paired with comprehensive information,
          so you can explore key features, specs, and options with ease. Our goal is to make your vehicle discovery
          journey as engaging and informative as possible, ensuring you have everything you need to make confident decisions."
        </p>
      </div>

      
      <div className="flex flex-col items-center justify-center h-auto bg-gray-200 p-5 sm:p-10">
        <h1 className="text-blue-950 text-2xl sm:text-4xl mt-5">The Three Giants</h1>
        <p className="text-blue-950 text-xs sm:text-sm my-3">German Machine, Engine of Life</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-auto py-5 justify-around">
          {images.map((item) => (
            <div key={item.id} className="w-full bg-white rounded p-4 shadow-lg">
              <img src={item.img} alt={item.title} className="w-full h-auto rounded" />
              <h1 className="text-lg sm:text-xl text-blue-950 font-bold mt-2 p-2">{item.title}</h1>
              <p className="text-xs sm:text-sm mt-1 p-2 text-blue-950">{item.info}</p>
              <button className="px-3 sm:px-5 py-1 sm:py-2 bg-blue-950 my-5 text-white font-bold text-xs rounded">
                Show More
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="h-auto flex flex-col justify-center items-center text-xl sm:text-3xl p-5 bg-blue-950">
        <h1 className="text-white border-[2px] sm:border-[3px] border-white p-2 my-5 sm:my-10 cursor-pointer">SERVICES</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full h-auto justify-around items-center">
          {services.map((item) => (
            <div key={item.id} className="bg-white rounded p-4 m-2 cursor-pointer shadow-md w-full sm:w-[80%] lg:w-[90%] h-[100%]">
              <h1 className="text-lg sm:text-xl text-blue-950 font-bold">{item.service}</h1>
              <p className="text-sm sm:text-base text-blue-950">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
