package com.demo.agricultural.Controller;

 

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.agricultural.Service.Serviceservice;
import com.demo.agricultural.dto.Servicedto;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/services")
public class ServiceController {

    private final Serviceservice serviceservice;

    public ServiceController(Serviceservice serviceservice) {
        this.serviceservice = serviceservice;
    }

    @GetMapping
    public ResponseEntity<List<Servicedto>> getAllServices() {
        List<Servicedto> services = serviceservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Servicedto> createService(@RequestBody Servicedto service) {
        Servicedto createdService = serviceservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servicedto> getServiceById(@PathVariable Long id) {
        Servicedto service = serviceservice.getServiceById(id);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Servicedto> updateServiceById(@PathVariable Long id, @RequestBody Servicedto updatedService) {
        Servicedto updatedServiceDto = serviceservice.updateServiceById(id, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceById(@PathVariable Long id) {
        serviceservice.deleteServiceById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}