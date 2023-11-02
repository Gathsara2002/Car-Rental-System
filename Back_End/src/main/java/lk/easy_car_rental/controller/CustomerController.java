package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.CustomerDTO;
import lk.easy_car_rental.dto.LoginDTO;
import lk.easy_car_rental.service.CustomerService;
import lk.easy_car_rental.service.LoginService;
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

    @Autowired
    LoginService loginService;

    @ResponseStatus(HttpStatus.CREATED)
    @GetMapping
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllCustomer());
    }

    @PostMapping
    public ResponseUtil addCustomer(CustomerDTO customer, LoginDTO dto) {

        /*save to system user*/
        //loginService.addUser(dto);

        customer.setLoginDTO(dto);

        /*register customer*/
        System.out.println(customer);
        service.addCustomer(customer);

        return new ResponseUtil("Ok", "Successfully Added", customer.getCusId());
    }

    @DeleteMapping(params = {"cusId"})
    public ResponseUtil deleteCustomer(String cusId) {

        /*delete from user first*/
        loginService.deleteUser(cusId);

        /*delete from customer*/
        service.deleteCustomer(cusId);

        return new ResponseUtil("Ok", "Successfully Deleted", cusId);
    }

    @PutMapping
    public ResponseUtil updateCustomer(CustomerDTO dto, LoginDTO loginDto) {

        /*update from user*/
        loginService.updateUser(loginDto);

        /*update customer*/
        service.updateCustomer(dto);
        return new ResponseUtil("Ok", "Successfully Updated", dto.getCusId());
    }

    @GetMapping(params = {"cusId"})
    public ResponseUtil findCustomer(String cusId) {
        return new ResponseUtil("Ok", "Successfully Searched", service.findCustomer(cusId));
    }

    @GetMapping(path = "/newId")
    public ResponseUtil generateNewCusId() {
        return new ResponseUtil("Ok", "Successfully Id Generated", service.getLastCusId());
    }

}
