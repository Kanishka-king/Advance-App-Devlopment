package com.demo.agricultural.dto;



public class ContactDto {

    private Long id;
    private String name;
    private String email;
    private String subject;
    private String message;

    // Constructors, getters, and setters

    public ContactDto() {
    }

    public ContactDto(Long id, String name, String email, String subject, String message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    // Getters and Setters
    // Ensure to generate appropriate constructors, getters, and setters
    // based on your requirements.

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}