package com.demo.agricultural.Service;


import org.springframework.stereotype.Service;

import com.demo.agricultural.Entity.Serviceentity;
import com.demo.agricultural.Repository.ServiceRepo;
import com.demo.agricultural.dto.Servicedto;
import com.demo.agricultural.mapper.Servicemapper;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Serviceservice {

    private final ServiceRepo serviceRepo;

    public Serviceservice(ServiceRepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Servicedto> getAllServices() {
        List<Serviceentity> services = serviceRepo.findAll();
        return services.stream()
                .map(Servicemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Servicedto getServiceByName(String name) {
        Serviceentity serviceentity = serviceRepo.findByName(name);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto createService(Servicedto servicedto) {
        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto updateServiceByName(String name, Servicedto updatedServicedto) {
        Serviceentity existingService = serviceRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setName(updatedServicedto.getName());
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setBranch(updatedServicedto.getBranch());
            existingService.setScheme(updatedServicedto.getScheme());
            existingService.setAmount(updatedServicedto.getAmount());
            existingService.setPurpose(updatedServicedto.getPurpose());
            existingService.setPanCard(updatedServicedto.getPanCard());
            existingService.setSalary(updatedServicedto.getSalary());
            existingService.setAadharNo(updatedServicedto.getAadharNo());
            existingService.setAddress(updatedServicedto.getAddress());



            existingService = serviceRepo.save(existingService);
            return Servicemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
@Transactional
    public void deleteServiceByName(String name) {
        serviceRepo.deleteByName(name);
    }
}