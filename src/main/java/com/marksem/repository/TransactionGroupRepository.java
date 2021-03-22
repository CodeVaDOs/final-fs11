package com.marksem.repository;

import com.marksem.dto.response.statistic.ResponseIncome;
import com.marksem.dto.response.statistic.ResponseStatistic;
import com.marksem.entity.transaction.TransactionGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

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

    @Query(
            value = "SELECT t.date AS date, tg.house_id AS houseId,\n" +
                    "       SUM(case t.transaction_type when 'INCOME' then t.amount_usd_per_day else 0 end) AS income,\n" +
                    "       SUM(case t.transaction_type when 'COMMUNAL' then t.amount_usd_per_day else 0 end) AS communal,\n" +
                    "       SUM(case t.transaction_type when 'SERVICE' then t.amount_usd_per_day else 0 end) AS service,\n" +
                    "       SUM(case t.transaction_type when 'OTHER' then t.amount_usd_per_day else 0 end) AS other\n" +
                    "FROM transactions t, transaction_groups tg\n" +
                    "WHERE tg.id = t.transaction_group_id AND tg.house_id IN (SELECT h.id FROM users u, houses h WHERE u.id = h.owner_id AND (u.manager_id = :id OR h.owner_id = :id)) AND t.date >= :from AND t.date <= :to\n" +
                    "GROUP BY t.date , tg.house_id\n" +
                    "ORDER BY t.date",

            nativeQuery = true)
    List<ResponseStatistic> findManagerStatistic(@Param("id") Long id, Date from, Date to);

    @Query(
            value = "SELECT COUNT(b.*) AS bookingsQuantity, SUM(b.to_date - b.from_date) AS daysQuantity FROM bookings b WHERE b.house_id = 1 AND b.to_date <= :to AND b.from_date>= :from",
            nativeQuery = true)
    ResponseIncome countBooking(@Param("id") Long id, Date from, Date to);

    @Query(
            value = "SELECT SUM(tg.amount_usd) AS income\n" +
                    "FROM transaction_groups tg\n" +
                    "WHERE tg.house_id = :id AND tg.from_date >= :from AND tg.to_date <= :to AND tg.transaction_type = 'INCOME'",
            nativeQuery = true)
    double countIncome(@Param("id") Long id, Date from, Date to);
}
