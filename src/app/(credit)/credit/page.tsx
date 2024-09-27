import type { FC } from "react";
const Page: FC = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/6 space-y-4">
        <div className="border-2 p-2 rounded-full bg-transparent text-center w-full flex gap-2 justify-center">
          <h1>Risqi Achmad Fahreal -</h1>
          <p>{`Front End Engineer | TIF 23'`}</p>
        </div>
        <div className="border-2 p-2 rounded-full bg-transparent text-center w-full">
          <h1>Risqi Achmad Fahreal</h1>
          <p>{`Front End Engineer | TIF 23'`}</p>
        </div>
      </div>
    </main>
  );
};

export default Page;
