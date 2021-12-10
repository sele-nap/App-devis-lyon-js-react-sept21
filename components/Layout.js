import Footer from "./Footer";
import next from "next";

export default function Layout({children}) {
  return (
    <div>
        <main>{children}</main>
      <Footer/>
    </div>
  );
}
