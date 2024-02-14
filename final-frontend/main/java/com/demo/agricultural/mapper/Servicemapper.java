package com.demo.agricultural.mapper;

import com.demo.agricultural.Entity.Serviceentity;
import com.demo.agricultural.dto.Servicedto;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getName(),
                serviceentity.getEmail(),
                serviceentity.getBranch(),
                serviceentity.getMobile(),
                serviceentity.getScheme(),
                serviceentity.getAmount(),
                serviceentity.getPurpose(),
                serviceentity.getPanCard(),
                serviceentity.getSalary(),
                serviceentity.getAadharNo(),
                serviceentity.getAddress()

        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getEmail(),
                servicedto.getBranch(),
                servicedto.getMobile(),
                servicedto.getScheme(),
                servicedto.getAmount(),
                servicedto.getPurpose(),
                servicedto.getPanCard(),
                servicedto.getSalary(),
                servicedto.getAadharNo(),
                servicedto.getAddress()

        );
    }
}