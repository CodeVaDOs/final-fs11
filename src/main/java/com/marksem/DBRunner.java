package com.marksem;

import com.marksem.entity.user.User;
import com.marksem.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

//@Component
//@Profile("local")
@AllArgsConstructor
public class DBRunner implements CommandLineRunner {
    private final UserRepository userRepository;

//    public Status getStatus() {
//        Status[] statuses = Status.values();
//        int rnd = new Random().nextInt(statuses.length);
//        return statuses[rnd];
//    }


//    private void createUsers() {
//
//        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
//
//        IntStream.rangeClosed(0, 10).mapToObj(j -> {
//            User user = new User("user@ukr.net" + j,
//                    bCryptPasswordEncoder.encode("password"),
//                    new ArrayList<>());
//            user.getVacancies().addAll(IntStream.rangeClosed(j + 1, j + 10).mapToObj(i -> new Vacancy("name" + i, "position" + i, 1000 + i, "link" + i, "comtact@ukr.net" + i, getStatus(), new Date(), user)).collect(Collectors.toList()));
//            return user;
//        }).forEach(userRepository::save);
//    }
//
    @Override
    public void run(String... args) throws Exception {
//        createUsers();
    }
}
