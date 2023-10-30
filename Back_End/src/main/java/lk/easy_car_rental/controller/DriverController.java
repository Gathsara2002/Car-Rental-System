package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.DriverDTO;
import lk.easy_car_rental.dto.LoginDTO;
import lk.easy_car_rental.service.DriverService;
import lk.easy_car_rental.service.LoginService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:48 PM
 **/

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @Autowired
    LoginService loginService;

    @GetMapping
    public ResponseUtil getAllDrivers() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllDrivers());
    }

    @PostMapping
    public ResponseUtil addDriver(DriverDTO dto, LoginDTO loginDTO) {

        System.out.println(dto.toString());
        System.out.println(loginDTO.toString());

        //save driver as user
        loginService.addUser(loginDTO);

        //save driver to db
        service.addDriver(dto);

        return new ResponseUtil("Ok", "Successfully Added", dto);
    }

    @DeleteMapping(params = {"dId"})
    public ResponseUtil deleteDriver(String dId) {
        service.deleteDriver(dId);
        return new ResponseUtil("Ok", "Successfully Deleted", dId);
    }

    @PutMapping
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto) {
        service.updateDriver(dto);
        return new ResponseUtil("Ok", "Successfully Updated", dto);
    }

    @GetMapping(params = {"dId"})
    public ResponseUtil findDriver(String dId) {
        return new ResponseUtil("Ok", "Successfully Searched", service.findDriver(dId));
    }
}
