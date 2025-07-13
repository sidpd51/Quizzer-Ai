import { useAuth } from "@/context/AuthContext";
import HomeHero from "@/layouts/HomeHero";
import MobileNav from "@/layouts/MobileNav";
import NavBar from "@/layouts/NavBar";
import { useEffect, useState } from "react";
import { useApi } from "@/lib/api";
import { AxiosError } from "axios";

type InfoType = {
  id: string;
  name: string;
  email: string;
}

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [info, setInfo] = useState<InfoType>({ id: "", name: "", email: "" });
  const { accessToken } = useAuth();
  const api = useApi();

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await api({
          method: 'get',
          url: 'http://localhost:3542/api/v1/user/me',
          withCredentials: true
        });
        setInfo(response.data.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.status);
          console.log(error.response?.data.message);
        };
      }
    }
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full flex flex-col #f8f8ff">
      <NavBar
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <p>AccessToken: {accessToken}</p>
      <p>id: {`${info.id}`}</p>
      <p>name: {`${info.name}`}</p>
      <p>email: {`${info.email}`}</p>
      {isMobileMenuOpen && <MobileNav />}
      <HomeHero />
    </div>
  );
}

export default HomePage;
