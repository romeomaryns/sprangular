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

### 1.1.7 (19.03.2016)
* switched to Angular2 beta 11

### 1.1.6 (17.03.2016)
* Added sourcemaps for css
* Added webpack text extract plugin for production
* Removed styles.ts entry point

### 1.1.5 (16.03.2016)
* Postcss and autoprefixer


[show full changelog](CHANGELOG.md)

## Known bugs

```
Uncaught TypeError: Cannot read property 'cancelTask' of undefined
```

https://github.com/angular/angular/issues/7666

