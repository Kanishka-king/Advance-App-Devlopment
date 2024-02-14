package com.demo.agricultural.Controller;




import org.springframework.web.bind.annotation.RestController;

import com.demo.agricultural.Entity.Users;
import com.demo.agricultural.Service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins="*")
public class UserController {
    @Autowired
	UserService us;
	
    @PostMapping("user/post")
	public boolean addUser(@RequestBody Users ue)
	{
        return us.AddUser(ue);
	}
    @GetMapping("user/get")
    public List<Users> getAllUser()
    {
        return us.getUser();
    }
	@GetMapping("user/get/{id}")
	public Optional<Users> getbyId(@PathVariable String id)
	{
		return us.getById(id);
	}
    
}