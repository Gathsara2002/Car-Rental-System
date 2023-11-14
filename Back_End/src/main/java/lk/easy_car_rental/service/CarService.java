package lk.easy_car_rental.service;

import lk.easy_car_rental.dto.CarDTO;
import lk.easy_car_rental.entity.Car;

import java.util.ArrayList;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 7:48 PM
 **/
public interface CarService {

    void addCar(CarDTO dto);

    void deleteCar(String id);

    ArrayList<CarDTO> getAllCars();

    Car findCar(String id);

    void updateCar(CarDTO dto);

    String getLastCusId();

    ArrayList<CarDTO> filterByTransmissionType(String transmissionType);

    ArrayList<CarDTO> filterByVehicleType(String type);

    ArrayList<CarDTO> filterByFuelType(String fuelType);
}
