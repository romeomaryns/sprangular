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

Compile and package project:
```
mvn clean package
```

Then run discovery server:
```
cd shardis-discovery/
java -jar ./target/shardis-discovery-2.0.0-SNAPSHOT.jar
```

Then run api server:
```
cd shardis-api/
java -jar ./target/shardis-api-2.0.0-SNAPSHOT.jar
```

Then run auth server:
```
cd shardis-auth/
java -jar ./target/shardis-auth-2.0.0-SNAPSHOT.jar
```

Then run ui server:
```
cd shardis-api/
java -jar ./target/shardis-ui-2.0.0-SNAPSHOT.jar
```


## DEVELOPMENT USAGE:

To use development mode you need also webpack development server running in background.

Install all dependencies at first:
```
mvn clean install
```

Run discovery server in development mode:
```
cd shardis-discovery
mvn spring-boot:run -P dev -Dspring.profiles.active=dev,standalone
```

Run api server in development mode:
```
cd shardis-api
mvn spring-boot:run -P dev -Dspring.profiles.active=dev,standalone
```

Run auth server in development mode:
```
cd shardis-auth
mvn spring-boot:run -P dev -Dspring.profiles.active=dev,standalone
```

Run ui server in development mode:
```
cd shardis-ui
mvn spring-boot:run -P dev -Dspring.profiles.active=dev,standalone
```

Run webpack development server:
```
cd shardis-ui
npm run server
```

## TESTING ANGULAR

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

## DOCKER BUILD (PRODUCTION):

Build the docker image for all services

```
mvn install -P dev
```

## DOCKER BUILD (DEVELOPMENT):

Build the docker image for all services

```
mvn install
```

## DOCKER USAGE:

Start the discovery service first. This will start the discovery service
```
./run.sh
```

Start the result of the services

```
docker-compose up
```



## CHANGELOG:

### 2.0.0 (unreleased)
* Updated Spring Platform to Athens-RC1 and Spring Boot to 1.4.0
* Updated Spring Cloud to Brixton.SR4
* Updated Node to v6.3.1 and npm to 3.10.3
* Updated dependencies
* Removed shardis-parent project
* Added docker support (thanks to Tarun Sukhu)
* Disabled Eureka client in unit tests

### 1.9.0 (29.07.2016)
* Updated dependencies
* Updated Angular to rc.4
* Switched back to awesome-ts-loader (faster)
* Updated Spring Cloud to Brixton.SR1
* Removed lombok from project
* Added UUID to all entities
* Moved styles from main.scss to separate module
* Updated Spring Cloud to Brixton.SR2
* Updated Spring Platform to 2.0.6 and Spring Boot to 1.3.6
* Renamed java test classes to match surefire convention
* Webpack 2 and Typescript 2
* Reduced bundle size
* Updated Spring Cloud to Brixton.SR3
* Enabled gzip compression
* Removed typings in favor of types
* Updated angular2-material to 2.0.0-alpha.6-2
* Updated Spring Platform to 2.0.7 and Spring Boot to 1.3.7

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


[show full changelog](CHANGELOG.md)
