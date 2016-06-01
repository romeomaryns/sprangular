# Spring Boot Angular 2 starter

Originally based on great [AngularClass](https://github.com/AngularClass) webpack starter

## FEATURES:
* Build and testing process integrated with maven
* Spring cloud microservices with Zull and Eureka
* Spring security Oauth2 integration
* Spring Boot application in development mode use resources from webpack dev server
* scss support
* Angular material
* font-awesome


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
java -jar ./target/shardis-discovery-1.7.0.jar
```

Then build and run api server:
```
cd shardis-api/
mvn clean package
java -jar ./target/shardis-api-1.7.0.jar
```

Then build and run auth server:
```
cd shardis-auth/
mvn clean package
java -jar ./target/shardis-auth-1.7.0.jar
```

Then build and run ui server:
```
cd shardis-api/
mvn clean package
java -jar ./target/shardis-ui-1.7.0.jar
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

## Changelog

### 1.7.0 (unreleased)
* Added npm-check-updates as dev dependency
* Removed kitchensink page
* Updated dependencies
* Removed foundation and motion-ui
* Added angular2-material
* Basic angular2-material styling
* Added normalize.css

### 1.6.0 (26.05.2016)
* Updated node to 6.2.0
* Updated npm to 3.9.2
* Removed typings from git
* Updated typings
* Updated all node packages
* Fixed problem with nonexistent static directory
* Fixed webpack validator custom schema config
* Some fixes from AngularClass starter

### 1.5.0 (13.05.2016)
* Updated Spring Boot to 1.3.4
* Updated Spring Boot to 1.3.5
* Added Spring IO Platform dependency
* Various bugfixes

### 1.4.0 (05.05.2016)
* Updated Angular to beta 16
* Updated node dependencies
* Updated maven dependencies
* Fixed .gitignore
* Fully stateless authentication
* Storing oauth2 token in localstorage
* Removed form authentication
* Removed deprecated injectAsync
* Decoding user token and showing expiration date
* Updated Angular to beta 17
* Updated Angular to rc.1
* Replaced router-deprecated with router (temporary no async routes)

[show full changelog](CHANGELOG.md)
