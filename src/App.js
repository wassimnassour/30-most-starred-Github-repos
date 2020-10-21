import React from "react";
import { Header, Repo } from "./components/index";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Repo />
      </main>
    </div>
  );
}

export default App;
