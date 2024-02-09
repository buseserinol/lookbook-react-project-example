import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const { state } = useLocation();

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

      {state && (
        <p className="fs-3 my-3 text-center">
          Hata Kodunuz: <span className="badge bg-danger mx-2">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFoundPage;
