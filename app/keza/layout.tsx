import Navigation from "../components/Navigation_bar/Navigation";
import Footer from "../components/Footer";

const PageLayout = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-screen bg-green">
      <Navigation />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
