package com.marksem.repository;

import com.marksem.dto.response.ResponseStatistic;
import com.marksem.entity.transaction.TransactionGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface TransactionGroupRepository extends JpaRepository<TransactionGroup, Long> {
    @Query(
            value = "SELECT t.date AS date, tg.house_id AS houseId,\n" +
                    "       SUM(case t.transaction_type when 'INCOME' then t.amount_usd_per_day else 0 end) AS income,\n" +
                    "       SUM(case t.transaction_type when 'COMMUNAL' then t.amount_usd_per_day else 0 end) AS communal,\n" +
                    "       SUM(case t.transaction_type when 'SERVICE' then t.amount_usd_per_day else 0 end) AS service,\n" +
                    "       SUM(case t.transaction_type when 'OTHER' then t.amount_usd_per_day else 0 end) AS other\n" +
                    "FROM transactions t, transaction_groups tg\n" +
                    "WHERE tg.id = t.transaction_group_id AND tg.house_id = :id AND t.date >= :from AND t.date <= :to\n" +
                    "GROUP BY t.date , tg.house_id\n" +
                    "ORDER BY t.date",

            nativeQuery = true)
    List<ResponseStatistic> findStatistic(Long id, Date from, Date to);
}
