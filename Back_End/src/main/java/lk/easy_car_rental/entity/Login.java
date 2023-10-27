package lk.easy_car_rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Gathsara
 * created : 10/27/2023 -- 7:43 PM
 **/

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Login {
    @Id
    String userId;
    String userName;
    String passWord;
    String role;
}
