package com.theironyard.Entities;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * Created by macbookair on 12/8/15.
 */

@Entity
@Table(name = "weddings")
public class Wedding {
    @Id
    @GeneratedValue
    @Column(nullable = false)
     int id;

    @Column(nullable = false)
    public String weddingName;

    @Column(nullable = false)
    public String location;

    @Column(nullable = false)
    public String date;

    @ManyToOne
    public User user;

    public Wedding(){
    }

    public Wedding(String date, String location, String weddingName, int id) {
        this.date = date;
        this.location = location;
        this.weddingName = weddingName;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWeddingName() {
        return weddingName;
    }

    public void setWeddingName(String weddingName) {
        this.weddingName = weddingName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
