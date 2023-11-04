package lk.easy_car_rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 4:45 PM
 **/
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RentDetail_PK implements Serializable {
    private String carID;
    private String rentID;
}
