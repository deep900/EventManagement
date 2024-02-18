import "./css/App.css";
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Titillium+Web:wght@400;700&display=swap');
      </style>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
