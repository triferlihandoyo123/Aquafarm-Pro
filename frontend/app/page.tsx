import Image from "next/image";
import Login from "./login/login";
import Dashboard from "./dashboardA/page";
export default function Home() {
  return (
    <div className="bg-green-700">
      <Login/>
    </div>
  );
}
