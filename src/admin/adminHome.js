import { Outlet } from "react-router-dom";
import AdminNavbar from "./adminNav";
const AdminHome = () => {
  return (
    <section id='home'>
      <AdminNavbar />
      <Outlet />
    </section>
  );
};
export default AdminHome;
