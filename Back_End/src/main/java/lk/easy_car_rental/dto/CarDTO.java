package lk.easy_car_rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:21 PM
 **/

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CarDTO {
    private String carId;
    private String brand;
    private String type;
    private String transmissionType;
    private String fuelType;
    private int noOfPassengers;
    private String frontView;
    private String backView;
    private String sideView;
    private String interior;
    private double dailyRate;
    private double monthlyRate;
    private double extraKmPrice;
    private double freeMileage;
    private String regNo;
    private String color;
    private String availability;
}
