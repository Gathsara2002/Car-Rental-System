package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.CustomerDTO;
import lk.easy_car_rental.service.CustomerService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * @author : Gathsara
 * created : 10/28/2023 -- 1:46 PM
 **/

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService service;

    @GetMapping
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllCustomer());
    }

    @PostMapping
    public ResponseUtil addCustomer(CustomerDTO dto) {
        service.addCustomer(dto);
        return new ResponseUtil("Ok", "Successfully Added", dto);
    }

    @DeleteMapping(params = {"cusId"})
    public ResponseUtil deleteCustomer(String cusId) {
        service.deleteCustomer(cusId);
        return new ResponseUtil("Ok", "Successfully Deleted", cusId);
    }

    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO dto) {
        service.updateCustomer(dto);
        return new ResponseUtil("Ok", "Successfully Updated", dto);
    }

    @GetMapping(params = {"cusId"})
    public ResponseUtil findCustomer(String cusId) {
        return new ResponseUtil("Ok", "Successfully Searched", service.findCustomer(cusId));
    }

}
