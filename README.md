# hacknet

### To build Server

cd server

npm i

npm run dev

Check http://localhost:8000/healthcheck in your browser

Ensure it returns Works.....

### To build Client

cd client

npm i

npm run dev

Check http://localhost:3000/ in your browser to see UI

### Environment Variable

Create a .env file
Add PORT=<your port number>
Add DATABASE_URL=<connection string> @Ikenna will share connection string in discord

### Database

To generate the migration files run the following command:

npx drizzle-kit generate --config=server/drizzle.config.ts