


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="icon.png" alt="Logo" width="80" height="80">

  <h3 align="center">Movies Service</h3>

  <p align="center">
    Just a simple app created to learn GraphQL <br> A service to manage records of movies with this GraphQL app
    <br />
    <br />
  </p>
</div>

## Stack
- Node.js (v16.4.0) 
- Typescript
- GraphQL
- MongoDB

## How to run
<div align="center">
<img src="docker-icon.png" alt="Logo" height="110">
<p align="center">
You will need to install <a href="https://www.docker.com/">Docker</a> on your machine
</p>
<br/>
</div>

### Run containers on Docker compose

```shell
# Will start MongoDB into a Docker Container
docker-compose up -d
```

### Start application
```shell
# Running app on http://localhost:4000
yarn start:dev
```