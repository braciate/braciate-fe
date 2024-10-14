import Footer from "@/components/ui/footer";
import React from "react";
import Navbar from "@/components/ui/navbar";
import Bem from "../../components/home/utils/modal/bem";
import Dpm from "../../components/home/utils/modal/dpm";
import Ukm from "../../components/home/utils/modal/ukm";

interface ILandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* {children} */}
      <Bem/>
      <Dpm/> 
      <Ukm/>
      
      <Footer />
    </>
  );
};

export default LandingLayout;
