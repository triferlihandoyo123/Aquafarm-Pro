// LandingPage.tsx

'use client'

import React, { useState, useEffect } from "react";
import { handleLogout } from "../auth/auth";
import IkanForm from "../add_ikan/page";

// Define a TypeScript interface for the Ikan object
interface Ikan {
  id: number;
  nama: string;
  deskripsi: string;
  gambar: string; // Assuming gambar is a string representing the image filename
}

const LandingPage: React.FC = () => {
  const [ikans, setIkans] = useState<Ikan[]>([]); // Explicitly define the type as an array of Ikans

  useEffect(() => {
    const fetchIkans = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/ikans");
        if (response.ok) {
          const data = await response.json();
          setIkans(data);
        } else {
          console.error("Failed to fetch ikans");
        }
      } catch (error) {
        console.error("Error while fetching ikans:", error);
      }
    };

    fetchIkans();
  }, []);

  return (
    <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Header Section */}
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
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Guides
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

      {/* Main Content Section */}
      <main className="flex flex-col container mx-auto p-5 overflow-y-auto">
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
          {ikans.map((ikan) => (
            <div
              key={ikan.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={ikan.gambar} // Gunakan URL langsung dari backend
                alt={ikan.nama}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {ikan.nama}
                </h2>
                <p className="text-gray-700">{ikan.deskripsi}</p>
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
