package lk.easy_car_rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 4:57 PM
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentDTO {
    private String rentID;
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private LocalDate returnDate;
    private LocalDate requestDate;
    private CustomerDTO customerDTO;
    private List<RentDetailsDTO> rentDetails;
}
