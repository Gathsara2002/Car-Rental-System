package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.dto.CustomerDTO;
import lk.easy_car_rental.dto.LoginDTO;
import lk.easy_car_rental.entity.Customer;
import lk.easy_car_rental.entity.Login;
import lk.easy_car_rental.repo.CustomerRepo;
import lk.easy_car_rental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 1:52 PM
 **/

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCustomer(CustomerDTO dto) {

        if (customerRepo.existsById(dto.getCusId())) {
            throw new RuntimeException(dto.getCusId() + " is already available, please insert a new ID");
        }

        Customer customer = mapper.map(dto, Customer.class);
        customerRepo.save(customer);
    }

    @Override
    public void deleteCustomer(String id) {
        if (!customerRepo.existsById(id)) {
            throw new RuntimeException(id + " Customer is not available, please check the ID before delete.!");
        }
        customerRepo.deleteById(id);
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        List<Customer> all = customerRepo.findAll();
        return mapper.map(all, new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public CustomerDTO findCustomer(String id) {
        if (!customerRepo.existsById(id)) {
            throw new RuntimeException(id + " Customer is not available, please check the ID.!");
        }
        Customer customer = customerRepo.findById(id).get();
        return mapper.map(customer, CustomerDTO.class);
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (!customerRepo.existsById(dto.getCusId())) {
            throw new RuntimeException(dto.getCusId() + " Customer is not available, please check the ID before update.!");
        }
        Customer map = mapper.map(dto, Customer.class);
        customerRepo.save(map);
    }
}
