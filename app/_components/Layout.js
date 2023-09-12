import Header from "@/app/_components/Header";

export default function Layout({ children }) {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />

      <div className="w-full max-w-[1100px] flex flex-col grow mx-auto px-2 mt-8">
        <div className="flex flex-col grow">
          {typeof children === "function" ? children() : children}
        </div>
      </div>
    </div>
  );
}
