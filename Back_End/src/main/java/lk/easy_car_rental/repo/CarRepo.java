package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 7:47 PM
 **/
public interface CarRepo extends JpaRepository<Car, String> {
    @Query(value = "SELECT carId FROM Car ORDER BY carId DESC LIMIT 1", nativeQuery = true)
    String getLastIndex();

    @Query(value = "SELECT * FROM Car WHERE transmissionType =?1 and availability='AVAILABLE'", nativeQuery = true)
    ArrayList<Car> filterByTransmissionType(String transmissionType);
}
