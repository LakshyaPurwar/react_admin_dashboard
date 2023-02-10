import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { Routes, Route, Link, Router } from 'react-router-dom';
import New from "./pages/new/New";
import Single from "./pages/Single/Single";
import { newProductForm, newUserForm } from "./formSource";
import './style/dark.scss';

import { useSelector } from "react-redux";

function App() {
  const darkTheme = useSelector((state)=>{return state.theme.darkTheme});

  return (
    <div className={`App ${darkTheme && 'dark'}`}>
      <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />}/>
            <Route path = "users">
              <Route index element={<List />} />
              <Route path = ":userId" element={<Single/>} />
              <Route path="new" element={<New inputs={newUserForm} title={"Add New User"}/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={newProductForm} title={"Add New Product"}/>}/>
              <Route path=":productId" element={<Single />}/>
            </Route>
          </Route>        
        </Routes>
    </div>
  );
}
export default App;
