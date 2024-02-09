import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const ProductDetail = () => {
  //useNavigate kurulumu
  const navigate = useNavigate();
  // urldeki parametreyi al
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        //ürünün bilgisi API'den gelmediyse 404 sayfasına yönlendir
        navigate("/undefined", { state: err.response.status });
      });

    console.log(book);
  }, []);

  return (
    <div>
      {!book && <Loader />}

      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <img
              className="rounded img-fluid shadow"
              style={{ maxHeight: "400px" }}
              src={book.image}
              alt={book.title}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4">
              <BookDetail title={"Yazar"} value={book.author} />
              <BookDetail title={"Açıklama"} value={book.description} />
              <BookDetail title={"Yıl"} value={book.year} />
              <BookDetail title={"Sayfa sayısı"} value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

// second component

const BookDetail = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-secondary me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
