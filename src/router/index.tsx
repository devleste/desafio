import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import ContactsListView from "../views/ContactListView";
import ContactDetailsView from "../views/ContactDetailsView";
import EditContactView from "../views/EditContactView";
import NewContactView from "../views/NewContactView";
import { contactService } from "../services/contactService";
import InsightsView from "../views/InsightsView";

const routes: RouteObject[] = [
  {
    loader: async () => {
      await contactService.loadContacts();
      return null;
    },
    children: [
      {
        path: "/",
        element: <Navigate to={"/contacts/"} replace />,
      },
      {
        element: <DefaultLayout />,
        path: "/contacts/",
        children: [
          {
            path: "/contacts/",
            element: <ContactsListView />,
            children: [
              {
                path: "/contacts/:contactid",
                element: <ContactDetailsView />,
              },
              {
                path: "/contacts/:contactid/edit/",
                element: <EditContactView />,
              },
              {
                path: "/contacts/new/",
                element: <NewContactView />,
              },
            ],
          },
        ],
      },
      {
        path: "/insights/",
        element: <DefaultLayout />,
        children: [
          {
            path: "/insights/",
            element: <InsightsView />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
