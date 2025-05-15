import React from "react";

const Destination = () => {
  const images = [
    {
      id: 1,
      url: "https://akcdn.detik.net.id/visual/2019/07/03/66048cd8-30b6-42a3-9e3c-1cb5f655a720_169.jpeg?w=1200",
      title: "Tour Jepang",
    },
    {
      id: 2,
      url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474240-Left-Bank-Paris.jpg",
      title: "Paris Experience",
    },
    {
      id: 3,
      url: "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/jungfraujoch.webp",
      title: "Swiss Journey",
    },
    {
      id: 4,
      url: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/a09710eeb604a66276bc74d304e6d801c14ced98/big-cb0fc75914a607f6b9065f8a5b191a09.jpg",
      title: "Iceland Adventure",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {images.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
        >
          <img
            src={item.url}
            alt={item.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Temukan pengalaman baru di destinasi impianmu.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destination;
