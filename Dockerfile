#
# Build stage
#
FROM maven:3.8.7-openjdk-18 AS build
COPY . .
RUN mvn clean package -DskipTests

#
# Package stage
#
FROM openjdk:18.0.2.1-jdk-slim-buster
COPY --from=build /target/moodmixer-0.0.1-SNAPSHOT.jar demo.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]