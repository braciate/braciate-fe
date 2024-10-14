import type { FC } from "react";
import { useLoading } from "@/hooks/useLoading";
import style from "./loading.module.css";

const LoadingScreen: FC = () => {
  const { dots } = useLoading();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-[0.96]">
      <div className="p-6 rounded-lg shadow-xl">
        <div className="flex flex-col items-center justify-center">
          {/* <div className="w-16 h-16 border-t-4 border-b-4 border rounded-full animate-spin"></div> */}
          <div className={style.loader}></div>
          <p className="mt-8 text-lg font-semibold text-white">
            Loading<span className="inline-block w-8 text-left">{dots}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
