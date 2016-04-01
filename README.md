# Spring Boot Angular 2 starter

Originally based on great [AngularClass](https://github.com/AngularClass) webpack starter

## FEATURES:
* Build and testing process integrated with maven
* Spring Boot application in development mode use resources from webpack dev server
* scss support
* Foundation 6
* font-awesome
* All features from AngularClass starter

## PRODUCTION USAGE:

To use production mode you need to use production maven profile as well as production spring profile (both activated as default)

Run application in production mode:
```
mvn spring-boot:run
```

Just package application in production mode:
```
mvn clean package
```

## DEVELOPMENT USAGE:

To use development mode you need also webpack development server running in background.

Run application in development mode:
```
mvn spring-boot:run -P dev -Dspring.profiles.active=dev
```

Run webpack development server:
```
npm run server
```

## TESTING

Run unit tests:
```
npm run test
```

Run e2e tests:
```
npm run e2e
```

## Changelog

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

