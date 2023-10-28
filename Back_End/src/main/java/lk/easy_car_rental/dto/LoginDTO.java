package lk.easy_car_rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Gathsara
 * created : 10/27/2023 -- 7:42 PM
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class LoginDTO {
    private String userId;
    private String userName;
    private String passWord;
    private String role;
}
