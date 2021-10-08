import { useState, useEffect } from "react";
import Characters from "./Characters";
import Navigation from "./Navigation";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className='App'>
      <Navigation page={page} setPage={setPage} />
      <Characters page={page} />
    </div>
  );
}

export default App;
