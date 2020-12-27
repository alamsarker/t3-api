# Tic Tac Toe(T3)

Tic Tac Toe(T3) api has been implemented in this repository.


## Installation

Step 1: Prerequisites

    * Install docker
        * Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/
        * Windows: https://docs.docker.com/docker-for-windows/install/
    * Install docker-compose
        * Ubuntu: https://docs.docker.com/compose/install/
        * Windows: Not necessary. Windows docker installer has docker-composer included.

    Run `docker -v` and `docker-compose -v` to make sure the installation.

Step 2: Install NodeJS and packages

   * Clone repository and go to project directory.
   * Run `cp .env.example .env`.
   * Run `make` or `make start`. If it's not working, then try to use `sudo` as `sudo make start`. Also, there can be conflict on ports. Its needed to change the port from `docker-compose.yml` file.    
    * Access T3-API via http://localhost:7000

## Tests

Run `npm run test-integration` for integration test. Integration test has been added for all logs CRUD. Unit Test is missing because there weren't implemeted any business logic.


## Technical Notes

1) Added prefix `api/v1` for each api route.
2) Swagger has been implemented for api documentation. Swagger json can be found in the route `api/v1/swagger.json`.
3) Log CRUD has been implemented in this api.
4) Single session - This feature has not added for the sake of simplicity.
5) sqlite db has used for both integration test and data for the simplicity.In real world, mongo or other relational DB will use for storing data and memory based sqlite may be ok for integration/regression test.
