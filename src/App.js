import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import Sign_In from './pages/Sign_In';
import Browse_Jobs from './pages/Jobs/Browse_Jobs';
import "react-multi-carousel/lib/styles.css";
import Single_Job_View from './pages/Jobs/Single_Job_View';
import Browse_Freelancers from './pages/Frerlancers/Browse_Freelancers';
import Freelancer_Profile from './pages/Frerlancers/Freelancer_Profile';
import About from './pages/About';
import Blog_View from './pages/Blog_View';
import Our_Blog from './pages/Our_Blog';
import Sign_Up from './pages/Sign_Up';
import Help_Center from './pages/Help_Center';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Invoice_Slip from './pages/Invoice_Slip';
import Sign_Up_Profile from './pages/Sign_Up_Profile';
import Browse_Project from './pages/Work/Browse_Project';
import Browser_Company from './pages/Company/Browser_Company';
import Single_Project_View from './pages/Work/Single_Project_View';
import Company_Profile from './pages/Company/Company_Profile';
import Pricing_Plans from './pages/Pricing_Plans';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/browser_Job" element={<Browse_Jobs />} />
          <Route path="/browser_Freelancer" element={<Browse_Freelancers />} />
          <Route path="/browser_Job/:id" element={<Single_Job_View />} />
          <Route path="/browser_Freelancer/:id" element={<Freelancer_Profile />} />
          <Route path="/browser_Project" element={<Browse_Project />} />
          <Route path="/browser_Project/:id" element={<Single_Project_View />} />
          <Route path="/browser_Company" element={<Browser_Company />} />
          <Route path="/browser_Company/:id" element={<Company_Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Our_Blog />} />
          <Route path="/blog_view/:id" element={<Blog_View />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pricing" element={<Pricing_Plans />} />
          <Route path="/login" element={<Sign_In />} />
          <Route path="/register" element={<Sign_Up />} />
          <Route path="/sign_up_profile" element={<Sign_Up_Profile />} />
          <Route path="/help_center" element={<Help_Center />} />
        </Routes>
      <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
