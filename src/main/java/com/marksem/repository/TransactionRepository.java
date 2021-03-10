package com.marksem.repository;

import com.marksem.entity.transaction.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

//  @Query("select t from transactions t where t.date between from_date LIKE %:fromDate% and to_date LIKE %:toDate%")
//  List<Transaction> getTransactionsByRange(@Param("fromDate") Date fromDate, @Param("toDate") Date toDate);

  List<Transaction> getAllByDate(Date date);
}
