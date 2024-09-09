package com.edu.drugstore.Service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.drugstore.Entity.Medicine;
import com.edu.drugstore.Model.MedicinePOJO;
import com.edu.drugstore.Repository.MedicineRepository;

import jakarta.persistence.EntityNotFoundException;
@Service
public class MedicineServiceImple implements IMedicineService {
@Autowired
private  MedicineRepository mr;
    @Override
    public void deleteById(long id) {
        Optional<Medicine> optionalMe = mr.findById(id);
        if (optionalMe.isPresent()) {      
          mr.delete(optionalMe.get());
        } else {
          try {
            throw new Exception("Can't delete it!");
        } catch (Exception e) {
            
            e.printStackTrace();
        }
        } 
        
    }

    @Override
    public List<Medicine> findAll() {
       return mr.findAll();
    }

    @Override
    public Optional<Medicine> findById(Long id) {
        return mr.findById(id);
    }

    @Override
    public Medicine save(MedicinePOJO medi) {
        Medicine med = new Medicine(medi.getName(), medi.getType(), medi.getDateMan(), medi.getVexpiry(),medi.getQuantity(), medi.getPrice());
    return mr.save(med);
    }

    @Override
    public void update(long id, MedicinePOJO medi) {
       Medicine cine= new Medicine();
       cine.setId(id);
       cine.setName(medi.getName());
       cine.setType(medi.getType());
       cine.setDateMan(medi.getDateMan());
       cine.setVexpiry(medi.getVexpiry());
       cine.setQuantity(medi.getQuantity());
       cine.setPrice(medi.getPrice());
       Optional<Medicine> optionalMe = mr.findById(id);
       if (optionalMe.isPresent()) {      
         mr.save(cine);
       }
       else {
        throw new EntityNotFoundException();
      } 

        
    }

    @Override
    public void updateName(long id, String name) {
       Optional<Medicine> optionalMe = mr.findById(id);
       if (optionalMe.isPresent()) {   
        Medicine cine=optionalMe.get();
        cine.setId(id);
        cine.setName(name);
         mr.save(cine);
       }
       else {
       throw new EntityNotFoundException();
      } 

    }
    
}
