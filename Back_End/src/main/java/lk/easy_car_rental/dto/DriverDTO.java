package lk.easy_car_rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:47 PM
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String dId;
    private String name;
    private String contact;
    private String address;
    private String licenseNo;
    private String availability;
    private LoginDTO loginDTO;
}
