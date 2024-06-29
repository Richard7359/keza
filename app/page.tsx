import HomePage from "./keza/home/page";
import Navigation from "./components/Navigation_bar/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HomePage />
      <Footer />
    </main>
  );
}
