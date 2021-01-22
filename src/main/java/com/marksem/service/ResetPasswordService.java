package com.marksem.service;

import com.marksem.repo.UserRepository;
import com.marksem.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class ResetPasswordService {
    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final JavaMailSender javaMailSender;

    @Value("${url.server}")
    private String serverUrl;
    @Value("${url.client}")
    private String clientUrl;

    @Value("${jwt.expirationPasswordReset}")
    private long expirationPasswordReset;

    public ResetPasswordService(UserRepository userRepository, JwtTokenProvider jwtTokenProvider, JavaMailSender javaMailSender) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.javaMailSender = javaMailSender;
    }

    public void sendMessageToEmail(String email) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        helper = new MimeMessageHelper(message, true, "UTF-8");
        helper.setTo(email);
        helper.setSubject("reset password");

        String token = "______token";

        String href = serverUrl + "/resetPassword" + "?token=" + token;
        helper.setText("<p>Для изменения пароля перейдите по ссылке:</p>" + href, true);
        javaMailSender.send(message);
    }
}
