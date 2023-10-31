package lk.easy_car_rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 4:47 PM
 **/

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Payment {

    @Id
    private String payId;
    private LocalDate date;
    private LocalTime time;
    private double lostDamage;
    private double total;

    @OneToOne(cascade = CascadeType.ALL)
    private Rent rent;

}
