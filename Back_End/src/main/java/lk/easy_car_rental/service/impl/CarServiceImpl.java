package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.dto.CarDTO;
import lk.easy_car_rental.entity.Car;
import lk.easy_car_rental.repo.CarRepo;
import lk.easy_car_rental.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 7:49 PM
 **/

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCar(CarDTO dto) {
        if (repo.existsById(dto.getCarId())) {
            throw new RuntimeException(dto.getCarId() + " is already available, please insert a new ID");
        }

        Car map = mapper.map(dto, Car.class);
        repo.save(map);
    }

    @Override
    public void deleteCar(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Car is not available, please check the ID before delete.!");
        }
        repo.deleteById(id);
    }

    @Override
    public List<CarDTO> getAllCar() {
        List<Car> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    @Override
    public CarDTO findCar(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Car is not available, please check the ID.!");
        }
        Car car = repo.findById(id).get();
        return mapper.map(car, CarDTO.class);
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (!repo.existsById(dto.getCarId())) {
            throw new RuntimeException(dto.getCarId() + " Car is not available, please check the ID before update.!");
        }
        Car map = mapper.map(dto.getCarId(), Car.class);
        repo.save(map);
    }
}
