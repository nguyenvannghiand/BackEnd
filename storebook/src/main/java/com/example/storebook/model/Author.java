package com.example.storebook.model;

import javax.persistence.*;
import javax.xml.crypto.Data;
import java.io.Serializable;
import java.util.Date;

@Table(name = "author")
@Entity
public class Author implements Serializable {
    @Id
    private Integer Id;

    @Column(name = "name")
    private String name;

    @Column(name = "birthday")
    private Date birthday;

    public Author() {

    }

    public Author(String name, Date birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }
}