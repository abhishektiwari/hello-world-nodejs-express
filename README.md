# How to run?

1. Build docker image using `Dockerfile`,

```
docker build -t hello-world .
```

2. Run the hello-world application using the docker image,

```
docker run -p 3000:3000 -v ${PWD}:/Users/abhishektiwari/Labs/hello-world -w /usr/src/app -it --rm hello-world node index.js
```