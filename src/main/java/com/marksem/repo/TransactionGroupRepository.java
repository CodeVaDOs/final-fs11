package com.marksem.repo;

import com.marksem.entity.transaction.TransactionGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionGroupRepository extends JpaRepository<TransactionGroup, Long> {
}
