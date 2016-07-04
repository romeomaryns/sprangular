# SPRING BOOT ANGULAR 2 STARTER

## PROJECT DESCRIPTION:

This sample project demonstrates how to integrate Spring Boot application with Angular 2.
It could be used as base for your future Angular2 Java projects.
Node and npm are installed as part of maven build. Also webpack build and karma tests runs with maven.
It also uses Spring Cloud microservices and Spring Security with Oauth2 JWT tokens.


## FEATURES:
* Build and testing process integrated with maven
* Spring cloud microservices with Zull and Eureka
* Spring security Oauth2 integration
* Spring Boot application in development mode use resources from webpack dev server
* Scss support
* Angular material integration
* Font-awesome integration
* Lazy loaded routes

## PRODUCTION USAGE:

To use production mode you need to use production maven profile as well as production spring profile (both activated as default)

Install parent and common libraries:
```
cd shardis-parent/
mvn install

cd shardis-common/
mvn install
```

Then build and run discovery server:
```
cd shardis-discovery/
mvn clean package
java -jar ./target/shardis-discovery-1.9.0.jar
```

Then build and run api server:
```
cd shardis-api/
mvn clean package
java -jar ./target/shardis-api-1.9.0.jar
```

Then build and run auth server:
```
cd shardis-auth/
mvn clean package
java -jar ./target/shardis-auth-1.9.0.jar
```

Then build and run ui server:
```
cd shardis-api/
mvn clean package
java -jar ./target/shardis-ui-1.9.0.jar
```


## DEVELOPMENT USAGE:

To use development mode you need also webpack development server running in background.

Install all dependencies at first
Install parent and common libraries:
```
cd shardis-parent/
mvn install

cd shardis-common/
mvn install
```

Run discovery server in development mode:
```
cd shardis-discovery
mvn spring-boot:run -P dev -Dspring.profiles.active=dev
```

Run api server in development mode:
```
cd shardis-api
mvn spring-boot:run -P dev -Dspring.profiles.active=dev
```

Run auth server in development mode:
```
cd shardis-auth
mvn spring-boot:run -P dev -Dspring.profiles.active=dev
```

Run ui server in development mode:
```
cd shardis-ui
mvn spring-boot:run -P dev -Dspring.profiles.active=dev
```

Run webpack development server:
```
cd shardis-ui
npm run server
```

## TESTING

Run unit tests:
```
cd shardis-ui
npm run test
```

Run e2e tests:
```
cd shardis-ui
npm run e2e
```

## CHANGELOG:

### 1.9.0 (unreleased)
* Updated dependencies
* Updated Angular to rc.4
* Switched back to awesome-ts-loader (faster)
* Updated Spring Cloud to Brixton.SR1

### 1.8.0 (30.06.2016)
* Better directory structure for angular components
* Dependency updates
* Updated Angular to rc.2
* Migrate awesome-ts-loader to ts-loader due to problems with karma
* Migrate to router 3
* Lazy routes with modified version of AngularClass webpack resolver
* Updated Angular to rc.3
* Added 404 page
* Much cleaner webpack configuration
* Role based visibility of menu items
* CRUD example for authenticated users
* Route access for selected roles (guards)
* Switched to new Angular Forms
* Updated angular2-material to 2.0.0-alpha.6

### 1.7.0 (08.06.2016)
* Added npm-check-updates as dev dependency
* Removed kitchensink page
* Updated dependencies
* Removed foundation and motion-ui
* Added angular2-material
* Basic angular2-material styling
* Added normalize.css
* Added fancy loading screen
* Removed development ribbon
* Updated angular2-material to 2.0.0-alpha.5-2
* Added angular2-material palette to main.scss
* Added sidenav navigation
* Added working login form
* Added ng2-webstorage library
* Inline base css from file and minify html

[show full changelog](CHANGELOG.md)
