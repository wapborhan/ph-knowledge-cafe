import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <Fragment>
      <div className="container mx-auto px-40 space-y-3">
        <Header />
        <hr />
        <Blogs />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
