import { BrowserRouter , Routes, Route } from "react-router-dom";
import './assets/css/reset.css'
import './assets/css/common.css'
import Layout from "./components/Layout";
import NoticeDetail from "./components/NoticeDetail";
import CustomerAdd  from "./components/CustomerAdd";
import CustomerDetail   from "./components/CustomerDetail";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Notice from "./pages/Notice";
import Customer from "./pages/Customer";
 

const App = () => {
  return (
    <BrowserRouter>    
      <Routes >
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Project" element={<Project />}/>

          <Route path="/notice">
            <Route index element={<Notice />}/>
            <Route path=":noticeID" element={<NoticeDetail />}/>
          </Route>

          <Route path="/customer">
            <Route index element={<Customer/>}/>
            <Route path=":CustomerAdd" element={<CustomerAdd />}/>
            <Route path=":CustomerID" element={<CustomerDetail />}/>
            </Route>
          </Route>
      </Routes>
</BrowserRouter>
  );
};

export default App;
