package lk.easy_car_rental.dto;

import lk.easy_car_rental.entity.Rent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 4:56 PM
 **/

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PaymentDTO {
    private String payId;
    private LocalDate date;
    private LocalTime time;
    private double lostDamage;
    private double total;
    private Rent rent;
}
