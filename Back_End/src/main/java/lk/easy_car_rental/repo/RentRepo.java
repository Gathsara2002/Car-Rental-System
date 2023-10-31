package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:15 PM
 **/
public interface RentRepo extends JpaRepository<Rent,String> {
}
