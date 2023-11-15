import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import User from "./Components/User";
import Priority from "./Components/Priority";
import Status from "./Components/Status";

function App() {
  const [selectedItem, setSelectedItem] = useState('status');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Navbar itemClick={handleItemClick} />
      {selectedItem === 'status' && <Status />}
      {selectedItem === 'user' && <User />}
      {selectedItem === 'priority' && <Priority />}
    </>
  );
}

export default App;
