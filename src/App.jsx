import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
