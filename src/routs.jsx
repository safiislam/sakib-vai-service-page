import { createBrowserRouter } from 'react-router-dom';
import Mainn from './Mainn';
import Home from './componant/Home';
import About from './componant/About';
import Services from './componant/Services';
import Contact from './componant/Contact';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainn></Mainn>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            
            {
                path: "/about",
                element: <About></About>,
                
            },
            {
                path: "/services",
                element: <Services></Services>,
                
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
                
            }
        ]
    }
])