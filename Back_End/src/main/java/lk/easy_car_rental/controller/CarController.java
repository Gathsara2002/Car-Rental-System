package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.CarDTO;
import lk.easy_car_rental.service.CarService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 7:46 PM
 **/

@RestController
@RequestMapping("/car")
@CrossOrigin
@Transactional
public class CarController {

    @Autowired
    CarService service;

    @GetMapping
    public ResponseUtil getAllCars() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllCars());
    }

    @PostMapping
    public ResponseUtil addCar(CarDTO dto) {
        service.addCar(dto);
        return new ResponseUtil("Ok", "Successfully Added", dto);
    }

    @DeleteMapping(params = {"carId"})
    public ResponseUtil deleteCar(String carId) {
        service.deleteCar(carId);
        return new ResponseUtil("Ok", "Successfully Deleted", carId);
    }

    @PostMapping(path = "/update")
    public ResponseUtil updateCar(@RequestBody CarDTO dto) {
        service.updateCar(dto);
        return new ResponseUtil("Ok", "Successfully Updated", dto);
    }

    @GetMapping(params = {"carId"})
    public ResponseUtil findCar(String carId) {
        return new ResponseUtil("Ok", "Successfully Searched", service.findCar(carId));
    }

    @GetMapping(path = "/newId")
    public ResponseUtil generateNewCusId() {
        return new ResponseUtil("Ok", "Successfully Id Generated", service.getLastCusId());
    }
}
