package com.shardis.api.domain.blog;

import com.shardis.api.domain.base.AuditedEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Tomasz Kucharzyk
 */

@Entity
@Table(name = "BLOG_POST")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class BlogPost extends AuditedEntity {


    private String title;
    private String content;

    public BlogPost(String title, String content) {
        this.title = title;
        this.content = content;
    }

    @Override
    public String toString() {
        return "BlogPost{" +
            "id=" + id +
            ", createdDate=" + createdDate +
            ", createdBy=" + createdBy +
            ", updatedDate=" + updatedDate +
            ", updatedBy=" + updatedBy +
            ", version=" + version +
            ", title='" + title + '\'' +
            ", content='" + content + '\'' +
            '}';
    }
}
