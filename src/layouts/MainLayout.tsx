import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTopButton from "@/components/BackToTopButton";
import NeuralBackground from "@/components/NeuralBackground";

const MainLayout = () => (
  <div className="relative flex min-h-screen flex-col">
    <NeuralBackground />
    <SiteHeader />
    <main className="flex-1">
      <Outlet />
    </main>
    <SiteFooter />
    <BackToTopButton />
  </div>
);

export default MainLayout;
