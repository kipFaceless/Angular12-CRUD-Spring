package com.eusebio.crudangular.repository;

import com.eusebio.crudangular.model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository< Course, Long>{
    
}
