package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.dto.DriverDTO;
import lk.easy_car_rental.repo.DriverRepo;
import lk.easy_car_rental.service.DriverService;
import org.modelmapper.ModelMapper;
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

    }

    @Override
    public void deleteDriver(String id) {

    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return null;
    }

    @Override
    public DriverDTO findDriver(String id) {
        return null;
    }

    @Override
    public void updateDriver(DriverDTO dto) {

    }
}
