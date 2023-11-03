package lk.easy_car_rental.service;

import lk.easy_car_rental.dto.RentDTO;

import java.util.ArrayList;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:17 PM
 **/
public interface RentService {

    String getLastIndex();

    void addRent(RentDTO dto);

    ArrayList<RentDTO> getAllRents();
}
