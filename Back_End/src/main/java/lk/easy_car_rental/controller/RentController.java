package lk.easy_car_rental.controller;

import lk.easy_car_rental.dto.RentDTO;
import lk.easy_car_rental.service.RentDetailsService;
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
    RentService service1;

    @Autowired
    RentDetailsService service2;

    @GetMapping(path = "/newId")
    public ResponseUtil generateNewCusId() {
        return new ResponseUtil("Ok", "Successfully Id Generated", service1.getLastIndex());
    }

    @PostMapping
    public ResponseUtil saveRent(@RequestBody RentDTO rentDTO) {
        System.out.println(rentDTO);
        service1.addRent(rentDTO);
        return new ResponseUtil("Ok", "Successfully Rent Saved", null);
    }

    @GetMapping
    public ResponseUtil getAllRents() {
        return new ResponseUtil("OK", "Successfully Loaded", service1.getAllRents());
    }

    @DeleteMapping(params = {"rentId"})
    public ResponseUtil deleteDriver(String rId) {
        service1.deleteRent(rId);
        return new ResponseUtil("Ok", "Successfully Deleted", rId);
    }


}
