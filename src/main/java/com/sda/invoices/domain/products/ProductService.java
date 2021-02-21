package com.sda.invoices.domain.products;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product save(Product product){
        return productRepository.save(product);
    }

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public void deleteById(Long id) {
       productRepository.deleteById(id);
    }
}
