import "../Styles/Dashboard.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/expense/find/1"
        ); // Assuming mID is 1 for TEst purposes
        setExpenses(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (eid) => {
    try {
      await axios.delete(`http://localhost:8080/expense/${eid}`);
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.eid !== eid)
      );
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Expense Dashboard</h1>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.eid}>
              <td>{expense.eid}</td>
              <td>{expense.date}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td id="actions">
                {/* Need to Link Editing to it's component later */}
                <Link to={`/expense/${expense.eid}`} className="edit-button">
                  <span>
                    <i class="fa-solid fa-pen"></i> Edit
                  </span>
                </Link>
                <button
                  onClick={() => handleDelete(expense.eid)}
                  className="delete-button"
                >
                  <span>
                    <i class="fa-solid fa-trash"></i> Delete
                  </span>
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
