import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Home } from '../screens/Home';
import { About } from '../screens/About';
import { Team } from '../screens/Team';
import { Company } from '../screens/Company';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "company",
        element: <Company />,
      },
    ],
  },
] as RouteObject[]);
