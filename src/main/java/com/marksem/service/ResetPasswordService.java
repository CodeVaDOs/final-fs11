package com.marksem.service;

import com.marksem.entity.user.User;
import com.marksem.exception.JwtAuthenticationException;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.UserRepository;
import com.marksem.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    @Value("${serverChangePasswordPath}")
    private String serverChangePasswordPath;

    public ResetPasswordService(UserRepository userRepository, JwtTokenProvider jwtTokenProvider, JavaMailSender javaMailSender) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.javaMailSender = javaMailSender;
    }

    public void sendMessageToEmail(String email) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(email);
        helper.setSubject("reset password");

        User user = userRepository.findByEmail(email).orElseThrow(() -> new NoDataFoundException("User doesn't exists"));
        String token = jwtTokenProvider.createPasswordResetToken(user.getId());

        String href = String.format("%s/%s/%s", serverUrl, serverChangePasswordPath, token);
        helper.setText("<p>Для изменения пароля перейдите по ссылке:</p>" + href, true);
        javaMailSender.send(message);
    }

    public String resetPassword(String token) {
        if (jwtTokenProvider.validatePasswordResetToken(token)) {
            Long id = jwtTokenProvider.getPasswordResetTokenId(token);
            return jwtTokenProvider.getPasswordUpdateToken(id);
        } else {
            throw new JwtAuthenticationException("token is expired", HttpStatus.UNAUTHORIZED);
        }
    }

    public Long updatePassword(String token, String password) {
        if (jwtTokenProvider.validatePasswordUpdateToken(token)) {
            Long id = jwtTokenProvider.getPasswordUpdateTokenId(token);
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
            return userRepository.findById(id)
                    .map(u -> {
                        u.setPassword(bCryptPasswordEncoder.encode(password));
                        userRepository.save(u);
                        return u.getId();
                    })
                    .orElseThrow(() -> new NoDataFoundException("user", id));
        } else {
            throw new JwtAuthenticationException("token is expired", HttpStatus.UNAUTHORIZED);
        }
    }
}
