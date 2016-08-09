FROM anapsix/alpine-java:8
VOLUME /tmp
ADD shardis-discovery-2.0.0-SNAPSHOT.jar app.jar
ADD wait-for-service.sh wait-for-service.sh
RUN bash -c 'chmod +x /wait-for-service.sh'
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
