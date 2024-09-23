import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

interface IFaqLayoutProps {
  children: React.ReactNode;
}

const FaqLayout: React.FC<IFaqLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default FaqLayout;
