package com.example.CRUDContactForm.components;

import com.example.CRUDContactForm.model.Client;
import com.example.CRUDContactForm.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ClientRepository clientRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Client client1 = new Client("Adam", "Hidvegi", "adamH", "blabla@gmail.com", "01234567", "notes");
        clientRepository.save(client1);

    }

}
