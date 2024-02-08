import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <p className="text-center fs-4">Üzgünüz, aradığınız sayfayı bulamadık.</p>

      <img
        className="img-fluid d-flex m-auto my-3 mb-5"
        src="https://i.gifer.com/7VE.gif"
        alt=""
      />

      <div className="d-flex justify-content-center my-4">
        <Link
          className="bg-primary text-white text-decoration-none rounded p-2 "
          to={"/"}
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
