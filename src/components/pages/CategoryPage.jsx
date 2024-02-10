import { NavLink, Outlet } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="d-flex align-items-center gap-4 p-5 ">
      {/* Hikaye ve romana yönlendiren linkler */}
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink className="decoration" to={"/kategori/hikaye"}>
          Hikaye
        </NavLink>
        <NavLink className="decoration" to={"/kategori/roman"}>
          Roman
        </NavLink>
      </aside>

      {/*sayfa içeriği*/}
      <Outlet />
    </div>
  );
};

export default CategoryPage;
