import { useEffect } from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);



  return (
  
   
  
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contactus" element={<Contactus />} />

    </Routes>
   
  );
}
export default App;
