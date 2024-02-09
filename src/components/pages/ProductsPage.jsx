import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import FilterArea from "../FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  //! url'deki arama parametrelerine erişme

  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");

  //! api isteği atarken gönderilecek olan paramet. belirle.
  const options = {
    params: {
      _sort: order === "z-a" ? "-title" : "title",
      q: query,
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:3090/books", options)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  return (
    <div className="mx-5  mt-4 h-100">
      <h3>{books?.length} kitap bulundu.</h3>

      <FilterArea />

      <div className="card-container">
        {books?.map((book) => (
          <div>
            <Card key={book.id} book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
