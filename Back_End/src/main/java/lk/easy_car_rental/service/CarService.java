package lk.easy_car_rental.service;

import lk.easy_car_rental.dto.CarDTO;

import java.util.List;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 7:48 PM
 **/
public interface CarService {

    void addCar(CarDTO dto);

    void deleteCar(String id);

    List<CarDTO> getAllCars();

    CarDTO findCar(String id);

    void updateCar(CarDTO dto);

}
