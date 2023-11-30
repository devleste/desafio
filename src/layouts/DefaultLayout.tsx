import { Outlet, useMatch, useNavigate } from "react-router-dom";
import Header from "../components/UI/Header";
import { IconPlus } from "@tabler/icons-react";

function DefaultLayout() {
  const matches = useMatch("/contacts/*");
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Header />
      <div className="w-full h-full pb-12">
        <Outlet />
      </div>
      {!!matches && (
        <div className="fixed bottom-12 right-6 md:right-12 z-40">
          <button
            className="bg-primary p-4 rounded-lg"
            onClick={() => navigate("/contacts/new/")}
          >
            <IconPlus className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
export default DefaultLayout;
