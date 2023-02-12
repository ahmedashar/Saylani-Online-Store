import React, { useState } from "react";
import "./style.css";

export default function AddProductForm() {
  let categoryList = ["Fruits", "Meats", "Vagetable", "Groceries"];
  const [category, setCategory] = useState("Fruit");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="container add_item_cont">
      <div className="mb-3">
        <label for="formFile" className="form-label">
         Item Image
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>

      <div className="mb-3">
        <label for="exampleInputText1" className="form-label">
          Item Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputText1"
          aria-describedby="emailHelp"
        />
      </div>
    
        {/* item category */}
      <div className="mb-3">
        {/* <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select> */}
        <label id="exampleInputEmail1">Select Category</label> <br />
        <select
          value={category}
          id="exampleInputEmail1"
          onChange={handleChange}
        >
          {categoryList.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Describe The Item
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3">
        <label for="exampleInputUnit1" className="form-label">
          Unit Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputText1"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
