package com.shardis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ErrorPage;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;

/**
 * Created by Tomasz Kucharzyk
 */
@SpringBootApplication
@EnableCaching
@EnableZuulProxy
public class ShardisUiApplication {

  public static void main(String[] args) {
    SpringApplication.run(ShardisUiApplication.class, args);
  }

  @Bean
  public EmbeddedServletContainerCustomizer containerCustomizer() {

    return (container -> {
      ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/");
      container.addErrorPages(error404Page);
    });
  }
}
