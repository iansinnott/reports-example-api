# Reports API

This is a simple REST API for Reports. The goal of this API is to provide a testing ground for new hiring candidates. Using this API they can implement a UI that consumes it during an interview.

## Reports

There's nothing special about the Reports object. They don't even have an owner attribute, they are just blobs of information meant to loosely resemble a resource you might need to interact with in a production environment.

Reports have the following structure:

```
{
  id: 'integer primary key',
  subject: 'string',
  region: 'string',
  impact: 'integer',
  createdAt: 'datetime',
  updatedAt: 'datetime',
}
```

To create a report the only mandatory field is `subject`. `id`, `createdAt` and `updatedAt` will all be created serverside:

```
POST /api/reports {
  subject: 'My first report'
}

-> {
  id: 1,
  subject: 'My first report',
  createdAt: '2015-08-03T19:38:30.208Z',
  updatedAt: '2015-08-03T19:38:30.208Z',
}
```

## TODO

Dockerizing this thing was proving difficult. Docker build was failing for unclear reasons. The Dockerfile should work in theor. Try running it again and troubleshoot. `docker build -t isinn/reports-api .`.
