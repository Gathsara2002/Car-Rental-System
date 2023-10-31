package lk.easy_car_rental.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:04 PM
 **/

@RestController
@RequestMapping("/car")
@CrossOrigin
@Transactional
public class PaymentController {
}
