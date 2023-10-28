package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.dto.CarDTO;
import lk.easy_car_rental.dto.DriverDTO;
import lk.easy_car_rental.entity.Car;
import lk.easy_car_rental.entity.Driver;
import lk.easy_car_rental.repo.DriverRepo;
import lk.easy_car_rental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:54 PM
 **/

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addDriver(DriverDTO dto) {
        if (repo.existsById(dto.getDId())) {
            throw new RuntimeException(dto.getDId() + " is already available, please insert a new ID");
        }

        Driver map = mapper.map(dto, Driver.class);
        repo.save(map);
    }

    @Override
    public void deleteDriver(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Driver is not available, please check the ID before delete.!");
        }
        repo.deleteById(id);
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        List<Driver> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO findDriver(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException(id + " Driver is not available, please check the ID.!");
        }
        Driver driver = repo.findById(id).get();
        return mapper.map(driver, DriverDTO.class);
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (!repo.existsById(dto.getDId())) {
            throw new RuntimeException(dto.getDId() + " Driver is not available, please check the ID before update.!");
        }
        Driver map = mapper.map(dto.getDId(), Driver.class);
        repo.save(map);
    }
}
