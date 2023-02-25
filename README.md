# QuestionAndAnswersMicroService

The task at hand for this project was to convert an already existing monolithic based backend to an microservice based architecture.

I was tasked specifically with the questions and answers portion.

This microservice is written entirely in node using express to handle the routes and postgres to store the data.

Given the amount of resources we had, the final architecture of this questions and answers microservice was :

1. nginx server
2. 3 express servers
3. 2 postgres databases , where the database was containerized via docker to make deployment on ec2 easier.

The nginx server was used to load balance the 3 express servers as well as provide caching. Nginx caching was chosen first since we saw that querying on the postgres database increased the response time tremendously. By implementing caching we were able to get up to 4k rps ( when querying the last 20% of the database). By adding an additional database we were able to extend our test to use the whole data base ( more then 1 million product_ids).