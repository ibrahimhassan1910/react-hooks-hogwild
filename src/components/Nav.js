import React, { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Example of a Nav component
function Nav() {
  return (
    <nav className="navbar">
      <h1>Hog Wild</h1>
      <div className="desktop-nav">
        <button className="nav-button">Home</button>
        <button className="nav-button">All Hogs</button>
        <button className="nav-button">Add New Hog</button>
      </div>
    </nav>
  );
}


  return (
    <nav >
      <h1>Hog Wild</h1>
      <div >
        <button onClick={toggleMenu}>
          {menuOpen ? "Close Menu" : "Menu"}
        </button>
        {menuOpen && (
          <div>
            <button>Home</button>
            <button>All Hogs</button>
            <button>Add New Hog</button>
          </div>
        )}
      </div>
      {/* Show buttons directly for larger screens */}
      <div className="desktop-nav" style={{ display: window.innerWidth > 768 ? 'flex' : 'none' }}>
        <button>Home</button>
        <button>All Hogs</button>
        <button>Add New Hog</button>
      </div>
    </nav>
  );
}
export default Nav;
