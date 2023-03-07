
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Layout
import { MainLayout } from './layouts/MainLayout';
import HelpLayout from './layouts/HelpLayout';
import UsersLayout from './layouts/UsersLayout';
// İmport Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact, contactAction } from './pages/help/Contact';
import { Faq } from './pages/help/Faq';
import { Users, UsersLoader } from './pages/Users';
import { UserDetails, UserDetailsLoader } from './pages/UserDetails';


// / => <Home/>
// /home => <Home/>
// /about => <About/>
// /help => <Help/>
// /help/contact => <Contact/>
// /help/fag => <Fag/>




// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { index: true, element: <Home /> }, //'/' Router da ana sayfayı ifade eder. Her iki satırda index:true aynı şeyi ifade eder. ikiside yazılabilir.
//   { path: 'home', element: <Home /> },
//   { path: about', element: <About /> } // "en baştaki '/' eklenmese de olur. "
// ])
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'help', element: <HelpLayout />,
        children: [
          { path: 'contact', element: <Contact />, action: contactAction },
          { path: 'faq', element: <Faq /> }
        ]
      },
      {
        path: "users", element: <UsersLayout />,
        children: [
          { index: true, element: <Users />, loader: UsersLoader },
          { path: ":userid", element: <UserDetails />, loader: UserDetailsLoader }
        ]
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;





