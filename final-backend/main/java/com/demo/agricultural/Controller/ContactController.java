package com.demo.agricultural.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.agricultural.Service.ContactService;
import com.demo.agricultural.dto.ContactDto;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/post")
    public ResponseEntity<ContactDto> createContact(@RequestBody ContactDto contactDto) {
        ContactDto createdContact = contactService.createContact(contactDto);
        return new ResponseEntity<>(createdContact, HttpStatus.CREATED);
    }

    // If you need to implement other CRUD operations, you can add them here
    @GetMapping("/get-all")
    public ResponseEntity<List<ContactDto>> getAllContacts() {
        List<ContactDto> contactList = contactService.getAllContacts();
        return new ResponseEntity<>(contactList, HttpStatus.OK);
    }
    

}