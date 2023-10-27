package lk.easy_car_rental.repo;

import lk.easy_car_rental.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gathsara
 * created : 10/27/2023 -- 7:49 PM
 **/
public interface LoginRepo extends JpaRepository<Login, String> {
}
