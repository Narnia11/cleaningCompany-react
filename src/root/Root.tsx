import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "../views/bookingView/BookinPage";
import LandingPage from "../views/landingView/LandingPage";
import Error from "../views/ErrorView/Error";
import Header from "../globalComponents/header/Header";
import Footer from "../globalComponents/footer/Footer";

export default function Root() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/landing" element={<LandingPage></LandingPage>}></Route>
          <Route path="/booking" element={<BookingPage></BookingPage>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
