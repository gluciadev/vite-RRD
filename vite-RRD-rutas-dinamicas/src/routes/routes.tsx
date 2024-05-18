import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Home } from '../screens/Home';
import { About } from '../screens/About';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about/:name/:age?/:lastname",
    element: <About />,
  },
] as RouteObject[]);