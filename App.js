import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },

      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])



// export default App;
