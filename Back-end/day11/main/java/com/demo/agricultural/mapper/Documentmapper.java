package com.demo.agricultural.mapper;


import com.demo.agricultural.Entity.Documententity;

import com.demo.agricultural.dto.Documentdto;


public class Documentmapper {

    public static Documentdto maptoDocumentdto(Documententity docentity) {
        // Implement the mapping logic
        return new Documentdto(
                docentity.getId(),
                docentity.getFileName()
                

        );
    }

    
}