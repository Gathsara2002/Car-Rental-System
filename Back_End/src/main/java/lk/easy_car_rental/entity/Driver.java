package lk.easy_car_rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author : Gathsara
 * created : 10/28/2023 -- 8:48 PM
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Driver {
    @Id
    @Column(name = "dId")
    private String userId;
    private String name;
    private String contact;
    private String address;
    private String licenseNo;
    private String availability;

    @OneToOne(cascade = CascadeType.ALL)
    private Login login;
}
