import Home from './Home/Home';
import DashboardChart from './DashboardChart/DashboardChart';
import AddInvoice from './AddInvoice/AddInvoice';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout/Layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<><DashboardChart /><Home /></>} />
      <Route path="add_invoice" element={<AddInvoice />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;