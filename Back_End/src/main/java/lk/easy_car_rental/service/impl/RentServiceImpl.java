package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.repo.RentDetailsRepo;
import lk.easy_car_rental.repo.RentRepo;
import lk.easy_car_rental.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

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
        return  repo.getLastIndex();
    }
}
