import Form from "react-bootstrap/Form";
import "../Styles/ExpenseForm.css"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";

function SignupForm() {
//   let [mID, setMID] = useState(0);
  let mID = 1;
  let [date, setDate] = useState(null);
  let [amount, setAmount] = useState(null);
  let [category, setCategory] = useState(null);
  let [description, setDescription] = useState(null);

  const nav = useNavigate();

  let data = {mID, date, amount, category, description };

  // Add a Function to handle the Submit click
  let handleSubmit = (e) => {
    e.preventDefault();

    if (date && amount && category) {
      axios
        .post(`http://localhost:8080/expense/${mID}`, data)
        .then((res) => {
          alert("Expense Sucessfully");
          console.log(res);

          nav("/dashboard")
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    } else {
      alert("Please fill all the fields in the form");
    }

   

  };

  console.log(category)

  return (
  <>
  <Navbar/>
    <div id="box-parent">
      <div id="box-child">
        <Form>

        {/* <label>Category</label>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br /> */}


        <label>Category</label>
    <select
        value={category}
        onChange={(e) => setCategory(e.target.value === '' ? null : e.target.value)}>
        <option value=''>None</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Rent">Rent</option>
        <option value="Travel">Travel</option>
        <option value="Others">Others</option>
    </select>
            <br />


          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />


          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter the Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />

          <label>Date</label>
          <input
            type="text"
            placeholder="Enter the Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />

          
          <button id="signupbutton" onClick={handleSubmit}>
            Create New Expense
          </button>  <br/> 
    
        </Form>
      </div>
    </div>
  </>
    
  );
}

export default SignupForm;
