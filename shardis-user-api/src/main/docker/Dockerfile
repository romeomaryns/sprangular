FROM anapsix/alpine-java:8
VOLUME /tmp
ADD shardis-user-api-2.3.0.jar /app.jar
ADD wait-for-service.sh /wait-for-service.sh
ADD wait-for-it.sh /wait-for-it.sh
ADD sync-time.sh /sync-time.sh
RUN bash -c 'touch /app.jar'
RUN bash -c 'touch /wait-for-service.sh'
RUN bash -c 'touch /wait-for-it.sh'
RUN bash -c 'touch /sync-time.sh'
RUN bash -c 'chmod +x /wait-for-service.sh'
RUN bash -c 'chmod +x /wait-for-it.sh'
RUN bash -c 'chmod +x /sync-time.sh'
RUN apk --no-cache add curl openntpd tzdata
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
