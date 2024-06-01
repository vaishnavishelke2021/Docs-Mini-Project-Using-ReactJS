import React from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 relative">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
