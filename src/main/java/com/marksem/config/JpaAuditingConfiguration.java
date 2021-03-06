package com.marksem.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.core.context.SecurityContextHolder;

import java.security.Principal;
import java.util.Optional;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class JpaAuditingConfiguration {

    @Bean
    public AuditorAware<String> auditorProvider() {

        return () -> {
            Principal principal = SecurityContextHolder.getContext().getAuthentication();
            try {
                return Optional.of(principal.getName());
            } catch (Exception e) {
                return Optional.of("server");
            }

        };
    }
}
