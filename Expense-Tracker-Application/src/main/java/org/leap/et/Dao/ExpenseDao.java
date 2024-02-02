package org.leap.et.Dao;

import java.util.List;
import java.util.Optional;

import org.leap.et.Entity.Expense;
import org.leap.et.Repository.ExpenseRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ExpenseDao {
	
	@Autowired
	private ExpenseRespository repo;
	
	public Expense saveExpense(Expense e) {
		return repo.save(e);
	}
	
	public Expense updateExpense(Expense e) {
		return repo.save(e);
	}
	
	public Optional<Expense> findExpenseById(int eID) {
		return repo.findById(eID);
	}
	
	public List<Expense> findAllExpense(int mID) {
		return repo.findAllExpense(mID);
	}
	
	
	public void deleteExpense(int eID) {
		repo.deleteById(eID);
	}
	
}
