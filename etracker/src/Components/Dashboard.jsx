import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/expense/find/1"); // Assuming 1 as mID
      setExpenses(response.data.data);
    } catch (error) {
      console.error("Error fetching expenses", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []); // Fetch expenses on component mount

  const handleEdit = (eid) => {
    // Redirect to edit/PUT route or page, you can define your routing logic here
    console.log(`Editing expense with eid: ${eid}`);
  };

  const handleDelete = async (eid) => {
    try {
      await axios.delete(`http://localhost:8080/expense/${eid}`);
      // Update the state only after successful deletion on the backend
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.eid !== eid)
      );
    } catch (error) {
      console.error("Error deleting expense", error);
    }
  };

  return (
    <div>
      <h2>Expense Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.eid}>
              <td>{expense.eid}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => handleEdit(expense.eid)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(expense.eid)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
