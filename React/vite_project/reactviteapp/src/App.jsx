import "./App.css";
import Login from "./pages/login";
// e.g. in src/main.jsx or src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/register";
import MainLayout from "./pages/MainLayout";
import { useState } from "react";
function App() {
  const [data, setData] = useState();
  console.log(data);
  
  return (
    <div>
      {/* <h1 className="head">Welcome to React</h1> */}
      {/* <h2 className="profile-head">Profile Page</h2>

      <Gallery />
      <StateHandling /> */}
      {/* <ImageManipulation /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Gallery />} />
          <Route path="/state" element={<StateHandling />} />
          <Route path="/image" element={<ImageManipulation />} /> */}
          <Route path="/login" element={<Login logData={data}/>} />
          <Route
            path="/register"
            element={<Registration regData={setData} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default App;