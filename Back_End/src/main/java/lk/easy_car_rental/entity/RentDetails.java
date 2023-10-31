package lk.easy_car_rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 4:41 PM
 **/

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class RentDetails {

    @Id
    private String carID;
    @Id
    private String rentID;

    private String driverID;

    @ManyToOne
    @JoinColumn(name = "rentID",referencedColumnName = "rentID",insertable = false,updatable = false)
    private Rent rent;

    @ManyToOne
    @JoinColumn(name = "carID",referencedColumnName = "carId",insertable = false,updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "driverID",referencedColumnName = "userId",insertable = false,updatable = false)
    private Driver driver;
}
