import MarketingHeader from "@/components/MarketingHeader";

export default function MarketingLayout({ children }) {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="w-full max-w-[1100px] flex flex-col grow mx-auto px-2">
        <MarketingHeader />
        <div className="flex flex-col grow">
          {typeof children === "function" ? children() : children}
        </div>
      </div>
    </div>
  );
}
