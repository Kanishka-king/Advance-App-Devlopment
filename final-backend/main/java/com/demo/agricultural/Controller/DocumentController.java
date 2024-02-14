package com.demo.agricultural.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.agricultural.Entity.Documententity;
import com.demo.agricultural.Service.DocumentService;

@RestController
@RequestMapping("/files")
public class DocumentController {

    @Autowired
    private DocumentService fileNameService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFileName(@RequestParam("fileName") String fileName) {
        try {
            fileNameService.saveFileName(fileName);
            return ResponseEntity.ok("File name saved successfully: " + fileName);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error saving file name");
        }
    }

    @GetMapping("/getById/{fileId}")
    public ResponseEntity<Documententity> getFileNameById(@PathVariable Long fileId) {
        Documententity fileNameEntity = fileNameService.getFileNameById(fileId);

        if (fileNameEntity != null) {
            return ResponseEntity.ok(fileNameEntity);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Other controller methods as needed
}
