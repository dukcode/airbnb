package team21.airbnb.config;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.boot.test.context.TestConfiguration;

@TestConfiguration
public class TestConfig {

    @PersistenceContext
    private EntityManager em;

}
