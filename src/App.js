import Home from './Home/Home';
import DashboardChart from './DashboardChart/DashboardChart';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout/Layout';
import FormInvoices from './FormInvoices/FormInvoices';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<><DashboardChart /><Home /></>} />
      <Route path="add_invoice" element={<FormInvoices />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;