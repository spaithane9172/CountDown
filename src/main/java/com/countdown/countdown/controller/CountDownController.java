package com.countdown.countdown.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CountDownController {

    @RequestMapping("/")
    public String home() {
        return "/countDownForm";
    }

    @RequestMapping("/handleCountDown")
    public String handleCountDown(@RequestParam("minutes") String minutes, Model model) {
        model.addAttribute("minutes", minutes);
        return "/countDown";
    }
}
