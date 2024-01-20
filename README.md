# NestJs simple login app

This is a simple login app using postgresql and nestjs 

### Prerequisites

- Node.js installed ( at least v 18)
- postgresql database


### Environment Variables
create a .env file and insert this data 
- DATABASE_URL: Connection URL for your PostgreSQL database.
- HASH_SALT: Number of rounds for hashing passwords.
- JWT_EXPIRES: Expiration time for JWT tokens.
- JWT_SECRET: Secret key for JWT token generation.

### Installation

1. Clone Repo 

2. Install dependencies
```
npm i
```

3. Generate prisma

```
npm run prisma:generate
```

4. Build app
```
npm run build
```

5. Run app
```
npm run start:prod
```

6. Run app in dev 
```
npm run start:dev
```


### Api Documentation
api Documentation is available at : 
```
yourdomain:port/docs
```