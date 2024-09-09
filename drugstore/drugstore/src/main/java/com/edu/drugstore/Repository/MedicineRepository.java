package com.edu.drugstore.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.drugstore.Entity.Medicine;
@Repository
public interface MedicineRepository extends JpaRepository< Medicine,Long>{
    
}
