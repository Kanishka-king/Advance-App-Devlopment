package com.demo.agricultural.Service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.demo.agricultural.Entity.Contact;
import com.demo.agricultural.Repository.ContactRepo;
import com.demo.agricultural.dto.ContactDto;
import com.demo.agricultural.mapper.Contactmapper;

@Service
public class ContactService {

    private final ContactRepo contactRepository;

    public ContactService(ContactRepo contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactDto createContact(ContactDto contactDto) {
        Contact contact = Contactmapper.toEntity(contactDto);
        contact = contactRepository.save(contact);
        return Contactmapper.toDto(contact);
    }
     public List<ContactDto> getAllContacts() {
        List<Contact> contacts = contactRepository.findAll();
        return contacts.stream()
                .map(Contactmapper::toDto)
                .collect(Collectors.toList());
    }
    // If you need to implement other service methods, you can add them here

}