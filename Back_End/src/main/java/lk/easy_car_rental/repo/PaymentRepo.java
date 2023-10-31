package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:06 PM
 **/
public interface PaymentRepo extends JpaRepository<Payment, String> {
}
