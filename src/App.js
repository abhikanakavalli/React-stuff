import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Carts from './components/Carts';

const AppLayout = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
  path:'/',
  element: <AppLayout/>,
  children: [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/carts',
      element: <Carts/>
    }
  ]
}
])

export default appRouter;
