package com.sda.invoices.domain.products;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private String name;
    private String description;
    private BigDecimal priceNetto;
    @Enumerated(EnumType.STRING)
    private VAT vat;

    public enum VAT {
        VAT_8(8), VAT_23(23);


        VAT(int value) {
            this.value = value;
        }

        int value;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getPriceNetto() {
        return priceNetto;
    }

    public VAT getVat() {
        return vat;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPriceNetto(BigDecimal priceNetto) {
        this.priceNetto = priceNetto;
    }

    public void setVat(VAT vat) {
        this.vat = vat;
    }
}
