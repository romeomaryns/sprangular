package eu.maryns.api.domain.user;

import eu.maryns.api.domain.base.AuditedEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Tomasz Kucharzyk
 */
@Entity
@Table(name = "USER")
public class User extends AuditedEntity {

}
