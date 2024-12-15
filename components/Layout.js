import Link from "next/link";
import TopNav from "./Sections/TopNav";
import Footer from "./Sections/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <TopNav />
      <div className="page-content">{children}</div>

      <Footer />
    </div>
  );
}
