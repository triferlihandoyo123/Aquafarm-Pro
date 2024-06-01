'use client'
import React from "react";
import { handleLogout } from "../auth/auth";
import IkanForm from "../Ikan/page";
const LandingPage: React.FC = () => {
  
  // Data contoh untuk card
  const data = [
    {
      id: 1,
      title: "Panduan Budidaya Ikan",
      content:
        "Panduan praktis untuk budidaya ikan air tawar. Di sini, Anda akan menemukan berbagai informasi berguna dan tutorial yang membantu Anda dalam budidaya ikan air tawar dengan efisien.",
      imageUrl: "/images/Trik.PNG",
    },
    {
      id: 2,
      title: "Artikel Terbaru",
      content:
        "Baca artikel terbaru tentang budidaya ikan, tips perawatan, dan inovasi terbaru dalam industri perikanan.",
      imageUrl: "/images/Artikel.PNG",
    },
    {
      id: 3,
      title: "Kontak Kami",
      content:
        "Hubungi kami untuk informasi lebih lanjut tentang layanan kami atau untuk konsultasi tentang budidaya ikan.",
      imageUrl: "/images/PNG-Tree.png",
    },
    // Tambah 3 data card berikut
    {
      id: 4,
      title: "Card 4",
      content: "Konten card keempat",
      imageUrl: "/images/image4.jpg",
    },
    {
      id: 5,
      title: "Card 5",
      content: "Konten card kelima",
      imageUrl: "/images/image5.jpg",
    },
    {
      id: 6,
      title: "Card 6",
      content: "Konten card keenam",
      imageUrl: "/images/image6.jpg",
    },
  ];
  return (
    <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden min-h-screen flex flex-col justify-between">
      <header className="w-full bg-emerald-500 py-4 z-0">
        <div className="container mx-auto flex justify-between items-start">
          <h1 className="text-white text-2xl font-bold pl-5">
            Selamat Datang di AquafarmPro
          </h1>
          <nav className="text-white pr-3">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Contact
                </a>
              </li>
              <li>
                <button onClick={IkanForm} className="hover:text-blue-200">
                  Create Data
                </button>
              </li>
              <li>
                <img
                  src="/images/profil.png"
                  alt="Profile Logo"
                  width={32}
                  height={32}
                  className="ml-2"
                />
              </li>
              <li>
                <button onClick={handleLogout} className="hover:text-blue-200">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-col container mx-auto p-5 overflow-y-auto justify-start">
        <div className="">
          <h1 className="text-4xl font-bold mb-8 text-white ">
            Panduan Praktis untuk Budidaya Ikan Air Tawar
          </h1>
          <p className="text-lg text-white">
            AquafarmPro adalah panduan praktis untuk budidaya ikan air tawar. Di
            sini, Anda akan menemukan berbagai informasi berguna dan tutorial
            yang membantu Anda dalam budidaya ikan air tawar dengan efisien.
          </p>
          <div className="mt-8 ">
            <button className="bg-emerald-500 z-100 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Mulai Sekarang
            </button>
          </div>
        </div>
        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.content}</p>
                <div className="flex justify-end mt-4">
                  <button className="bg-emerald-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
