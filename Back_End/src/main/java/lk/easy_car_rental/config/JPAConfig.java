package lk.easy_car_rental.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author : Gathsara
 * created : 10/25/2023 -- 6:06 PM
 **/

@Configuration
@EnableJpaRepositories(basePackages = {})
@EnableTransactionManagement
public class JPAConfig {
}
