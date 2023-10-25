package lk.easy_car_rental.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author : Gathsara
 * created : 10/25/2023 -- 6:02 PM
 **/

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {})
public class WebAppConfig {
    public WebAppConfig() {
        System.out.println("WebAppConfig: Instantiated");
    }
}
