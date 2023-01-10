
#
# Package stage
#
FROM openjdk:19
ADD /target/moodmixer-0.0.1-SNAPSHOT.jar demo.jar
# ENV PORT=8080
EXPOSE 8080:8080
ENTRYPOINT ["java","-jar","demo.jar"]