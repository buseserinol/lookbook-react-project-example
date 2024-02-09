import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import FilterArea from "../FilterArea";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3090/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

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
