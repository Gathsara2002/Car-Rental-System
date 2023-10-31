package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:51 PM
 **/
public interface DriverRepo extends JpaRepository<Driver, String> {
    @Query(value = "SELECT dId FROM Driver ORDER BY dId DESC LIMIT 1", nativeQuery = true)
    String getLastIndex();
}
