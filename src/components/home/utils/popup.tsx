import Image from "next/image";
import { Button } from "@/components/ui/button";

interface PopupProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  children: React.ReactNode;
}
const Popup: React.FC<PopupProps> = ({ trigger, setTrigger, children }) => {
  if (!trigger) return null;
  return (
    <div
      className="z-50 popup"
      onClick={() => {
        setTrigger(false);
      }}
    >
      <div
        className="popup-inner"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <Button
          className="close-btn"
          onClick={() => {
            setTrigger(false);
          }}
        >
          <Image src="/public/svg/fragments/close-btn.svg" alt="Close" />
        </Button>
        {children}
      </div>
    </div>
  );
};
export default Popup;
