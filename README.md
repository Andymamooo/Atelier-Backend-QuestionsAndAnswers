# Atelier Question And Answers Microservice

# Project Overview
The task at hand for this project was to convert an already existing monolithic based backend to an microservice based architecture to help with an increase in web traffic.
I was tasked specifically with the questions and answers portion.
This microservice is written entirely in node using express to handle the routes and postgres to store the data.


# Architecture Overview
Given the amount of resources we had, the final architecture of this questions and answers microservice was :

1. nginx server
2. 3 express servers
3. 2 postgres databases , where the database was containerized via docker to make deployment on ec2 easier.

The nginx server was used to load balance the 3 express servers as well as provide caching. Nginx caching was chosen first since we saw that querying on the postgres database increased the response time tremendously. By implementing caching we were able to get up to 3k rps ( when querying the last 20% of the database). By adding an additional database we were able to extend our test to use the whole data base ( more then 1 million product_ids).

The docker-compose file is used to deploy the database ( postgres) on an seperate instance. To get this file to work, you need to create volumes for CreateQATables.sql and also all the data ( in this project it was 3 seperate csv files ). Simply move just the docker-compose.yml file over to your ec2 instance and docker-compose up to start the instance ( make sure you have all your files in the correct path in the ec2 instance)

# Testing Results from stress test

Results before nginx caching
![Alt text](/Test%20Results/Before_Caching.png)
Results after nginx caching
![Alt text](/Test%20Results/After_caching.png)
Results at 4k RPS using the last 20% of dataset
![Alt text](/Test%20Results/4k_RPS_LAST_20%25.png)
Results at 1k RPS using the whole dataset
![Alt text](/Test%20Results/2_DB_1K_RPS_Whole_dataset.png)