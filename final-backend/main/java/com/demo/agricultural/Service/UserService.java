package com.demo.agricultural.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.agricultural.Entity.Users;
import com.demo.agricultural.Repository.UserRepo;




@Service
public class UserService {
    @Autowired
    UserRepo ur;
     
     
     public boolean AddUser(Users ue)
     {
          ur.save(ue);
          return true;
     }
     public List<Users> getUser()
     {
          return ur.findAll();
     }
     public Optional<Users> getById(String id)
     {
    	 return ur.findById(id);
     }
}