package com.shardis.auth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.ManagementServerProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

/**
 * Created by Tomasz Kucharzyk
 */
@Configuration
@Order(ManagementServerProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            //.csrf().disable()
            .formLogin().loginPage("/login").permitAll()
            .and()
            .logout().logoutUrl("/logout").invalidateHttpSession(true).deleteCookies("JSESSIONID").logoutSuccessUrl("/").permitAll()
            .and()
            .authorizeRequests().anyRequest().authenticated();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .parentAuthenticationManager(authenticationManager)
            .inMemoryAuthentication()
            .withUser("admin")
            .password("xxxxxx")
            .roles("USER", "ADMIN");
    }
}
