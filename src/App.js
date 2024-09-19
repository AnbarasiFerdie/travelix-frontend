import React, {useState}  from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/home";
import ContactPage from "./screens/contact";
import DestinationPage from "./screens/destination";
import HotelPage from "./screens/hotel";
import AboutPage from "./screens/about";
import DestinationAdminPage from "./screens/destination-admin";
import HotelAdminPage from "./screens/hotel-admin";
import DataSharing from "./context/context-api";

import "./css/flaticon.css";
import "./css/style.css"
import "./css/custom.css"

const App = () =>{

  const [filterList, setFilterList] = useState([]);

  const exchangeValue = (value) => {
    debugger;
    setFilterList(value);
  }
  return(
    <DataSharing.Provider value={{exchangeValue, filterList}}>
    <BrowserRouter>
    <Routes>
      <Route path ="" element={<HomePage></HomePage>}></Route>
      <Route path="contact" element={<ContactPage></ContactPage>}></Route>
      <Route path="destination" element={<DestinationPage></DestinationPage>}></Route>
      <Route path="about" element={<AboutPage></AboutPage>}></Route>
      <Route path="hotel" element={<HotelPage></HotelPage>}></Route>
      <Route path="destination-admin" element={<DestinationAdminPage></DestinationAdminPage>}></Route>
      <Route path="hotel-admin" element={<HotelAdminPage></HotelAdminPage>}></Route>
    </Routes>
    </BrowserRouter>
    </DataSharing.Provider>
  )
}

export default App;