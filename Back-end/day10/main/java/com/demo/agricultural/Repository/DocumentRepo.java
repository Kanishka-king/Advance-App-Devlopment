package com.demo.agricultural.Repository;
// FileNameRepository.java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.agricultural.Entity.Documententity;

@Repository
public interface DocumentRepo extends JpaRepository<Documententity, Long> {
    // You can add custom query methods if needed
}
