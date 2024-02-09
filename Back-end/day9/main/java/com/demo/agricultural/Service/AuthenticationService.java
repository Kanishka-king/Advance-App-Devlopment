package com.demo.agricultural.Service;

import com.demo.agricultural.dto.request.LoginRequest;
import com.demo.agricultural.dto.request.RegisterRequest;
import com.demo.agricultural.dto.response.LoginResponse;
import com.demo.agricultural.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}