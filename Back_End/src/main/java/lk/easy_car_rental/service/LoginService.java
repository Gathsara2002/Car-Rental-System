package lk.easy_car_rental.service;

import lk.easy_car_rental.dto.LoginDTO;

import java.util.List;

/**
 * @author : Gathsara
 * created : 10/27/2023 -- 7:50 PM
 **/

public interface LoginService {

    void addUser(LoginDTO dto);

    void deleteUser(String id);

    List<LoginDTO> getAllUser();

    LoginDTO findUser(String id);

    void updateUser(LoginDTO dto);
}
