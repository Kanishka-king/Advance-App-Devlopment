package com.demo.agricultural.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.agricultural.Entity.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Long> {
    // You can add custom query methods here if needed
}