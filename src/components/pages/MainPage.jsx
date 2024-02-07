import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Hoşgeldiniz!</h1>
      <img
        className="img-fluid rounded"
        src="https://i.gifer.com/8CPR.gif"
        alt=""
      />
      <p>
        <Link to={"/ürünler"}>Ürünler</Link> sayfasından yeni çıkan bütün
        kitaplara ulaşabilirsiniz.
      </p>
    </div>
  );
};

export default MainPage;
