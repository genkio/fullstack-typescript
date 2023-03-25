import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);

  return (
    <StrictMode>
      <pre>{data}</pre>
    </StrictMode>
  );
};

const app = document.querySelector("#app");
if (app) createRoot(app).render(<App />);
