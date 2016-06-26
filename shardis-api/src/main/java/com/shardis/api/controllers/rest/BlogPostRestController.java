package com.shardis.api.controllers.rest;


import com.google.common.collect.Lists;
import com.shardis.api.domain.blog.BlogPost;
import com.shardis.api.domain.blog.BlogPostRepository;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * Created by Tomasz Kucharzyk
 */

@Transactional
@RestController
@RequestMapping("/posts")
@PreAuthorize(value = "hasRole('ROLE_USER')")
@Slf4j
public class BlogPostRestController {

    @Autowired
    private BlogPostRepository blogPostRepository;

    @PostConstruct
    public void fillData() {
        List<BlogPost> posts = this.getPosts();
        if (posts.isEmpty()) {
            for (int i = 1; i <= 10; i++) {
                BlogPost post = new BlogPost("Sample blog post title #" + i, "Sample blog post content #" + i);
                blogPostRepository.save(post);
                log.warn(post.toString());
            }
        }
    }

    @RequestMapping("/")
    public List<BlogPost> getPosts() {
        return Lists.newArrayList(blogPostRepository.findAll());
    }


}
