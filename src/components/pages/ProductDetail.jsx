import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ProductDetail = () => {
  // urldeki parametreyi al
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));

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
              <BookDetail title={"Yazar"} value={book.author} />
              <BookDetail title={"Yazar"} value={book.author} />
              <BookDetail title={"Yazar"} value={book.author} />
              <BookDetail title={"Yazar"} value={book.author} />
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
