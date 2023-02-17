import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Imports component from routes folder
// import Home from "./routes/Home";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </>
//   );
// }

// export default App;