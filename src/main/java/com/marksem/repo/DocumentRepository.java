package com.marksem.repo;

import com.marksem.entity.document.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DocumentRepository extends JpaRepository<Document, Long> {
  @Query(
      value = "SELECT Count(*) FROM documents WHERE house_id IN (SELECT id FROM houses WHERE owner_id IN (SELECT id FROM users WHERE manager_id = :id)) AND type = 'CONTRACT'",
      nativeQuery = true)
  long getContractsQuantity(@Param("id") Long id);
}
