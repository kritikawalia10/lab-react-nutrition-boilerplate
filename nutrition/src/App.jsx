import React, { useState } from "react";
import Box from "./components/Box";
import Search from "./components/Search";
import Info from "./components/Info"

const App = () => {
  const [get, setget] = useState("");
  const Value = (e) => {
    setget(e.target.value);
  };
  return (
    <>
      <Search Value={Value} />
        {Info.filter((val) =>
        get === "" ? true : val.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((foodItem) => (
          <div key={foodItem.id} style={{ marginBottom: '13px', marginLeft: '100px' }}>
          <Box food={foodItem} />
        </div>
      ))}
    </>
  );
};

export default App;