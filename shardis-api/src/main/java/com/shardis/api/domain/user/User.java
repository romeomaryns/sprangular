package com.shardis.api.domain.user;

import com.shardis.api.domain.base.AuditedEntity;
import com.shardis.api.domain.base.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

/**
 * Created by Tomasz Kucharzyk
 */
@Entity
@Table(name = "USER")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class User extends AuditedEntity {

}
