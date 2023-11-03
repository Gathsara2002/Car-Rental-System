package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.RentDTO;
import lk.easy_car_rental.service.RentService;
import lk.easy_car_rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:28 PM
 **/

@RestController
@RequestMapping("/rent")
@CrossOrigin
@Transactional
public class RentController {

    @Autowired
    RentService service;

    @GetMapping(path = "/newId")
    public ResponseUtil generateNewCusId() {
        return new ResponseUtil("Ok", "Successfully Id Generated", service.getLastIndex());
    }

    @PostMapping
    public ResponseUtil saveRent(@RequestBody RentDTO rentDTO){
        return new ResponseUtil("Ok", "Successfully Added", service.());
    }


}
