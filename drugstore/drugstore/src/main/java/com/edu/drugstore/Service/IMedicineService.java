package com.edu.drugstore.Service;

import java.util.List;
import java.util.Optional;

import com.edu.drugstore.Entity.Medicine;
import com.edu.drugstore.Model.MedicinePOJO;

public interface IMedicineService {
    List<Medicine> findAll();

    Optional<Medicine> findById(Long id);
  
    Medicine save(MedicinePOJO medicine);
  
    void update(long id, MedicinePOJO medicine);
  
    void updateName(long id, String name);
  
    void deleteById(long id);
}
