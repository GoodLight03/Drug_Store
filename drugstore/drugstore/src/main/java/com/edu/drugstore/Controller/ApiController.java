package com.edu.drugstore.Controller;

import java.io.FileNotFoundException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.drugstore.Entity.Medicine;
import com.edu.drugstore.Model.MedicinePOJO;
import com.edu.drugstore.Service.IMedicineService;

import jakarta.persistence.EntityNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/medicine")
public class ApiController {
  @Autowired
  private IMedicineService im;

  @GetMapping("/all")
  public ResponseEntity<List<Medicine>> findAllMedicine() {
    return ResponseEntity.ok(im.findAll());
  }

  @GetMapping("/all/{id}")
  public ResponseEntity<Medicine> findMedicineById(@PathVariable long id) {
    Optional<Medicine> m = im.findById(id);
    if (m.isPresent()) {
      return ResponseEntity.ok(m.get());
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }

  }

  @PostMapping("/add")
  public ResponseEntity<Medicine> addMedicine(@RequestBody MedicinePOJO medicine) {
    Medicine mcd = im.save(medicine);
    try {
      return ResponseEntity.created(new URI("/api/medicine/add/" + mcd.getId())).body(mcd);

    } catch (URISyntaxException e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
  }

  @PutMapping("/all/{id}")
  public ResponseEntity<Void> updateMedicine(@RequestBody MedicinePOJO medicine, @PathVariable long id) {
    try {
      im.update(id, medicine);
      return ResponseEntity.ok().build();
    } catch (EntityNotFoundException ex) {
      return ResponseEntity.notFound().build();
    }
  }

  @PatchMapping("/all/{id}")
  public ResponseEntity<Void> updateMedicineName(@RequestBody String nameString, @PathVariable long id) {
    try {
      im.updateName(id, nameString);
      return ResponseEntity.ok().build();
    } catch (EntityNotFoundException ex) {
      return ResponseEntity.notFound().build();
    }
  }

  @DeleteMapping(path = "/all/{id}")
  public ResponseEntity<Void> deleteMeById(@PathVariable long id) {
    try {
      im.deleteById(id);
      return ResponseEntity.ok().build();
    } catch (EntityNotFoundException ex) {
      return ResponseEntity.notFound().build();
    }
  }

}
