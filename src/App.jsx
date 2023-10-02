import React from "react";
import "./global.css"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PageOne from "./components/pages/One";
// import PageTwo from "./components/pages/Two";
// import HomePage from "./components/pages/HomePage";
// import ProfilePage from "./components/pages/ProfilePage";
import Root from "./components/Root";

// {/* <Route path="*" element={<HomePage />} /> */}

function App() {
  return (
      <>
        {/* <BrowserRouter>
          <Routes>
            <Route path="test_repo/" element={<HomePage />} />
            <Route path="test_repo/one" element={<PageOne index={1}/>} />
            <Route path="test_repo/two" element={<PageTwo index={2}/>} />
            <Route path="test_repo/users">
              <Route path=":userId" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
        <Root />
      </>
  );
}


export default App;


