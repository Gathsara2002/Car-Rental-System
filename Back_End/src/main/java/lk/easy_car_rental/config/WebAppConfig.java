package lk.easy_car_rental.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author : Gathsara
 * created : 10/25/2023 -- 6:02 PM
 **/

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.easy_car_rental.controller", "lk.easy_car_rental.advisor"})
public class WebAppConfig implements WebMvcConfigurer {
    public WebAppConfig() {
        System.out.println("WebAppConfig: Instantiated");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**/**/").addResourceLocations("/Upload/");
    }
}
