package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:06 PM
 **/
public interface PaymentRepo extends JpaRepository<Payment, String> {
    @Query(value = "SELECT payId FROM Payment ORDER BY payId DESC LIMIT 1", nativeQuery = true)
    String getLastIndex();
}
