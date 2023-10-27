package lk.easy_car_rental.service.impl;

import lk.easy_car_rental.dto.LoginDTO;
import lk.easy_car_rental.service.LoginService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author : Gathsara
 * created : 10/27/2023 -- 8:00 PM
 **/

@Service
@Transactional
public class LoginServiceImpl implements LoginService {
    @Override
    public void addUser(LoginDTO dto) {

    }

    @Override
    public void deleteUser(String id) {

    }

    @Override
    public List<LoginDTO> getAllUser() {
        return null;
    }

    @Override
    public LoginDTO findUser(String id) {
        return null;
    }

    @Override
    public void updateUser(LoginDTO dto) {

    }
}
