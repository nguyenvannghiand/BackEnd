package com.example.storebook.dto;


import java.util.Date;

public class BookRequest {
    private String name;

    private String description;

    private String price;

    private String star;

    private String image;

    private String categoryId;

    private String nameAuthor;

    private Date birthdayAuthor;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getStar() {
        return star;
    }

    public void setStar(String star) {
        this.star = star;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    public String getNameAuthor() {
        return nameAuthor;
    }

    public void setNameAuthor(String nameAuthor) {
        this.nameAuthor = nameAuthor;
    }

    public Date getBirthdayAuthor() {
        return birthdayAuthor;
    }

    public void setBirthdayAuthor(Date birthdayAuthor) {
        this.birthdayAuthor = birthdayAuthor;
    }
}
