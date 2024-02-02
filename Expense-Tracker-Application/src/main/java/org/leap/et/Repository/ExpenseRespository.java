package org.leap.et.Repository;

import java.util.List;
import java.util.Optional;

import org.leap.et.Entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ExpenseRespository extends JpaRepository<Expense, Integer> {

	@Query("select e from Expense e where e.member.mID=?1")
	List<Expense> findAllExpense(int mID);
}
