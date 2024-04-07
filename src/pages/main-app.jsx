import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainApp = ({ children }) => { // Destructure props to access children
  return (
    <>
      <div>
        <Navbar />
        <div>
          {children} {/* Render children here */}
        </div>
        <Footer />
      </div >
    </>
  );
};

export default MainApp;
