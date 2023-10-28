package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:51 PM
 **/
public interface DriverRepo extends JpaRepository<Driver, String> {
}
