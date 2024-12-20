import React from "react";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
interface ICreditLayoutProps {
  children: React.ReactNode;
}

const FaqLayout: React.FC<ICreditLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default FaqLayout;
