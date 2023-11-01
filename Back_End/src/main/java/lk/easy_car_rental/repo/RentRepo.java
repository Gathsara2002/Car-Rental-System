package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:15 PM
 **/
public interface RentRepo extends JpaRepository<Rent,String> {
    @Query(value = "SELECT rentID FROM Rent ORDER BY rentID DESC LIMIT 1", nativeQuery = true)
    String getLastIndex();
}
