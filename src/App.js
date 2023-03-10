import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Layout
import { MainLayout } from './layouts/MainLayout';
import HelpLayout from './layouts/HelpLayout';
import UsersLayout from './layouts/UsersLayout';
// İmport Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Contact, contactAction } from './pages/help/Contact';
import { Faq } from './pages/help/Faq';
import { Users, UsersLoader } from './pages/users/Users';
import { UserDetails, UserDetailsLoader } from './pages/users/UserDetails';
import { UsersError } from './pages/users/UsersError';
import { GlobalErrors } from './pages/GlobalErrors';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <GlobalErrors />,
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
        path: "users",
        element: <UsersLayout />,
        errorElement: <UsersError />,
        children: [
          { index: true, element: <Users />, loader: UsersLoader },
          { path: "user/:userid", element: <UserDetails />, loader: UserDetailsLoader, }
        ]
      },
      { path: "*", element: <NotFound /> }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;





