import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
