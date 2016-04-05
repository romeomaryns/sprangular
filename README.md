# Spring Boot Angular 2 starter

Originally based on great [AngularClass](https://github.com/AngularClass) webpack starter

## FEATURES (OUTDATED):
* Build and testing process integrated with maven
* Spring Boot application in development mode use resources from webpack dev server
* scss support
* Foundation 6
* font-awesome
* All features from AngularClass starter

## PRODUCTION USAGE:

To use production mode you need to use production maven profile as well as production spring profile (both activated as default)

Install parent and common libraries:
```
cd shardis-parent/
mvn install

cd shardis-common/
mvn install
```

Then build and run api server:
```
cd shardis-api/
mvn clean package
java -jar ./target/shardis-api-1.3.0.jar
```

Then build and run ui server:
```
cd shardis-api/
mvn clean package
java -jar ./target/shardis-ui-1.3.0.jar
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

Run api server in development mode:
```
cd shardis-api
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

### 1.3.0 (UNRELEASED)
* refactoring to microservices
* multi module pom project
* shared common library
* maven enforcer plugin
* custom schema for webpack config validator
* zull proxy

### 1.2.2 (01.04.2016)
* Updated Angular to beta 13

### 1.2.1 (24.03.2016)
* Updated Angular to beta 12
* Removed zone.js fixes for beta 11
* Replaced es6-promise loader with custom solution

### 1.2.0 (23.03.2016)
* Added motion-ui integration
* Added fancy animation for accordion

### 1.1.9 (21.03.2016)
* Refactoring
* First Angular component for Foundation : Accordion

### 1.1.8 (20.03.2016)
* Typescript files naming convention
* Foundation kitchensink wit samples
* Some changes from AngularClass


[show full changelog](CHANGELOG.md)

## Known bugs

```
Uncaught TypeError: Cannot read property 'cancelTask' of undefined
```

https://github.com/angular/angular/issues/7666

