package com.demo.agricultural.Service;
// FileNameService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.agricultural.Entity.Documententity;
import com.demo.agricultural.Repository.DocumentRepo;

@Service
@Transactional
public class DocumentService {

    @Autowired
    private DocumentRepo fileNameRepository;

    public void saveFileName(String fileName) {
        Documententity fileEntity = new Documententity();
        fileEntity.setFileName(fileName);
        fileNameRepository.save(fileEntity);
    }

    public Documententity getFileNameById(Long fileId) {
        return fileNameRepository.findById(fileId).orElse(null);
    }

    // Other service methods as needed
}
