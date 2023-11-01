package lk.easy_car_rental.service;

import lk.easy_car_rental.dto.PaymentDTO;

import java.util.List;

/**
 * @author : Gathsara
 * created : 10/31/2023 -- 5:07 PM
 **/
public interface PaymentService {
    void addPayment(PaymentDTO dto);

    void deletePayment(String id);

    List<PaymentDTO> getAllPayments();

    PaymentDTO findPayment(String id);

    void updatePayment(PaymentDTO dto);

    String getLastIndex();
}
