package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 1:50 PM
 **/
public interface CustomerRepo extends JpaRepository<Customer, String> {
}
