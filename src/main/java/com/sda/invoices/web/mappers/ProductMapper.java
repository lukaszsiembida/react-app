package com.sda.invoices.web.mappers;

import com.sda.invoices.domain.products.Product;
import com.sda.invoices.web.dto.ProductDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ProductMapper {

    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);
    ProductDto toDto(Product product);
    Product toEntity(ProductDto dto);



}
