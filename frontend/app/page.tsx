import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Login from "./login/login";
import Dashboard from "./dashboardA/page";
import LandingPage from "./dashboard_U/dashboardU";

export default function Home() {
  return (
    <div className="bg-green-700">
      <Login/>
    </div>
  );
}
