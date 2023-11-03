package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.dto.RentDTO;
import lk.easy_car_rental.entity.Rent;
import lk.easy_car_rental.repo.RentDetailsRepo;
import lk.easy_car_rental.repo.RentRepo;
import lk.easy_car_rental.service.RentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:21 PM
 **/

@Transactional
@Service
public class RentServiceImpl implements RentService {

    @Autowired
    RentRepo repo;

    @Autowired
    RentDetailsRepo detailsRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String getLastIndex() {
        return repo.getLastIndex();
    }

    @Override
    public void addRent(RentDTO dto) {
        if (repo.existsById(dto.getRentID())) {
            throw new RuntimeException(dto.getRentID() + " is already available, please insert a new ID");
        }

        Rent map = mapper.map(dto, Rent.class);
        repo.save(map);
    }


    @Override
    public ArrayList<RentDTO> getAllRents() {
        List<Rent> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<RentDTO>>() {
        }.getType());
    }
}
