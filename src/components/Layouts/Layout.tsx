import { Header } from "./Headers/Header";
import { Footer } from "./Footers/Footer";

export const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full bg-black flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};