package com.shardis.auth.controllers.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Tomasz Kucharzyk
 */
@Controller
@RequestMapping("/")
@SessionAttributes("authorizationRequest")
public class AuthWebController {

    @RequestMapping("/login")
    public ModelAndView login() {
        return new ModelAndView("login");
    }

    @RequestMapping("/oauth/confirm_access")
    public ModelAndView authorize() {
        return new ModelAndView("authorize");
    }

}
