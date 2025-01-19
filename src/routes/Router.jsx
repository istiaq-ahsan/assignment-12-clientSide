import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Biodatas from "../pages/Biodatas";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../pages/DashboardRightBar/Admin/AdminDashboard";
import ManageUsers from "../pages/DashboardRightBar/Admin/ManageUsers";
import ApprovedPremium from "../pages/DashboardRightBar/Admin/ApprovedPremium";
import ApprovedContact from "../pages/DashboardRightBar/Admin/ApprovedContact";
import DashboardLayout from "../layout/DashboardLayout";
import FavouriteBiodata from "../pages/DashboardRightBar/Customer/FavouriteBiodata";
import ViewBiodata from "../pages/DashboardRightBar/Customer/ViewBiodata";
import ContactRequest from "../pages/DashboardRightBar/Customer/ContactRequest";
import EditBiodata from "../pages/DashboardRightBar/Customer/EditBiodata";
import BioDataDetails from "../pages/BioDataDetails";
import CheckOut from "../pages/CheckOut";
import Profile from "../pages/DashboardRightBar/Profile";
import AdminRoute from "./AdminRoute";
import GotMarried from "../pages/DashboardRightBar/Customer/GotMarried";
import SuccessStory from "../pages/DashboardRightBar/Admin/SuccessStory";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "bioDataDetails/:id",
        element: (
          <PrivateRoute>
            <BioDataDetails></BioDataDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "checkOut/:id",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "edit-biodata",
        element: <EditBiodata></EditBiodata>,
      },
      {
        path: "view-biodata",
        element: <ViewBiodata></ViewBiodata>,
      },
      {
        path: "favourite-biodata",
        element: <FavouriteBiodata></FavouriteBiodata>,
      },
      {
        path: "contact-request",
        element: <ContactRequest></ContactRequest>,
      },
      {
        path: "got-married",
        element: <GotMarried></GotMarried>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "admin-dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "approved-premium",
        element: (
          <AdminRoute>
            <ApprovedPremium></ApprovedPremium>
          </AdminRoute>
        ),
      },
      {
        path: "approved-contact",
        element: (
          <AdminRoute>
            <ApprovedContact></ApprovedContact>
          </AdminRoute>
        ),
      },
      {
        path: "success-story",
        element: (
          <AdminRoute>
            <SuccessStory></SuccessStory>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
