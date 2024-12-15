import TopNav from "./Sections/TopNav";
import Footer from "./Sections/Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen overflow-hidden">
      <TopNav />
      <div className="w-full">{children}</div>

      <Footer />
    </div>
  );
}
