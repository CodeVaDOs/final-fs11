package com.marksem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class FrontEndController {
    @GetMapping
    public String trueIndex() {
        return "forward:/index.html";
    }

    @GetMapping("/**/{subpath:[^\\.]+}")
    public String fakeIndex() {
        return "forward:/index.html";
    }
}
