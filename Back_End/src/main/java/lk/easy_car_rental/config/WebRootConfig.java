package lk.easy_car_rental.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author : Gathsara
 * created : 10/25/2023 -- 6:04 PM
 **/

@Configuration
@Import({})
@ComponentScan(basePackages = {})
public class WebRootConfig {
    public WebRootConfig() {
        System.out.println("WebRootConfig : Instantiated");
    }
}
