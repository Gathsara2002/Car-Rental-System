package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.CustomerDTO;
import lk.easy_car_rental.dto.LoginDTO;
import lk.easy_car_rental.service.CustomerService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;


/**
 * @author : Gathsara
 * created : 10/28/2023 -- 1:46 PM
 **/

@RestController
@CrossOrigin
@Transactional
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService service;

    @GetMapping
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllCustomer());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ResponseUtil addCustomer(@ModelAttribute CustomerDTO customer, @ModelAttribute LoginDTO dto) {
        System.out.println("request eka ava");
        customer.setLoginDTO(dto);
        System.out.println(dto.toString());
        System.out.println(customer.toString());
        service.addCustomer(customer,dto);
        return new ResponseUtil("Ok", "Successfully Added", customer);
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
