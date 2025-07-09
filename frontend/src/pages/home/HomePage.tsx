import HomeHero from "@/layouts/HomeHero";
import MobileNav from "@/layouts/MobileNav";
import NavBar from "@/layouts/NavBar";
import { useState } from "react";
function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full flex flex-col #f8f8ff">
      <NavBar
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      {isMobileMenuOpen && <MobileNav />}
      <HomeHero />
    </div>
  );
}

export default HomePage;
