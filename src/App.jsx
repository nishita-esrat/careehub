import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
