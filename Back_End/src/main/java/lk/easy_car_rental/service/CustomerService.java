package lk.easy_car_rental.service;

import lk.easy_car_rental.dto.CustomerDTO;
import lk.easy_car_rental.dto.LoginDTO;

import java.util.List;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 1:51 PM
 **/
public interface CustomerService {

    void addCustomer(CustomerDTO dto, LoginDTO loginDTO);

    void deleteCustomer(String id);

    List<CustomerDTO> getAllCustomer();

    CustomerDTO findCustomer(String id);

    void updateCustomer(CustomerDTO dto, LoginDTO loginDTO);

}
