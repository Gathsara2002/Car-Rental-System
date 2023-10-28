package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 7:47 PM
 **/
public interface CarRepo extends JpaRepository<Car, String> {
}
