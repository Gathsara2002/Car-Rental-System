package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.LoginDTO;
import lk.easy_car_rental.service.LoginService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * @author : Gathsara
 * created : 10/27/2023 -- 7:38 PM
 **/

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    LoginService service;

    @GetMapping
    public ResponseUtil getAllUsers() {
        List<LoginDTO> allUser = service.getAllUser();
        return new ResponseUtil("Ok","Successfully Loaded",allUser);
    }
}