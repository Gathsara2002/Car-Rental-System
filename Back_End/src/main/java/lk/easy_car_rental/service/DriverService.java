package lk.easy_car_rental.service;

import lk.easy_car_rental.dto.DriverDTO;

import java.util.List;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:52 PM
 **/
public interface DriverService {

    void addDriver(DriverDTO dto);

    void deleteDriver(String id);

    List<DriverDTO> getAllDrivers();

    DriverDTO findDriver(String id);

    void updateDriver(DriverDTO dto);
}
