package com.marksem.config;

import org.codehaus.jackson.map.ObjectMapper;
import org.h2.tools.Server;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ApplicationsBeans {

  @Bean
  public ModelMapper modelMapper() {
    return new ModelMapper();
  }

  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }

  @Bean
  public ObjectMapper objectMapper() {
    return new ObjectMapper();
  }

  @Profile("local")
  @Bean
  Server h2Server() {
    Server server = new Server();
    try {
      server.runTool("-tcp");
      server.runTool("-tcpAllowOthers");
    } catch (Exception e) {
      e.printStackTrace();
    }
    return server;

  }
}
