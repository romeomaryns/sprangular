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

### 1.1.6 (17.03.2016)
* added sourcemaps for css
* added webpack text extract plugin for production
* removed styles.ts entry point

### 1.1.5 (16.03.2016)
* postcss and autoprefixer

### 1.1.4 (16.03.2016)
* Webpack config refactor and cleanup
* Sass loader path configuration
* Bootstrap 4 (alpha) replaced by Foundation 6

### 1.1.3 (15.03.2016)
* some other fixes from original AngularClass starter

[show full changelog](CHANGELOG.md)
