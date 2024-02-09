import { useSearchParams } from "react-router-dom";

function FilterArea() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    //eklenecek parametreyi belirle
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("aramaTerimi", e.target[0].value);
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-4 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <label>Sırala</label>
        <select onChange={handleChange} className="form-select ">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          placeholder="kitap ismi giriniz"
          className="form-control "
          type="text"
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
}

export default FilterArea;
