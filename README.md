# identity-tenant-service
Identity Tenant microservice (Tenant wise user micro service)


## Migration ## 

npm install sequelize sequelize-cli pg pg-hstore

npm install -D typescript ts-node ts-node-dev @types/node

# individual file Migration

npx sequelize-cli migration:generate --name create-tenants
npx sequelize-cli migration:generate --name create-users
npx sequelize-cli migration:generate --name create-roles
npx sequelize-cli migration:generate --name create-permissions
npx sequelize-cli migration:generate --name create-role-permissions
npx sequelize-cli migration:generate --name create-user-roles
npx sequelize-cli migration:generate --name create-refresh-tokens
npx sequelize-cli migration:generate --name add-indexes

# Run Migration
npx sequelize-cli db:migrate
# Check Migration status
npx sequelize-cli db:migrate:status
# Undo last migration
npx sequelize-cli db:migrate:undo
# Undo all migrations
npx sequelize-cli db:migrate:undo:all


# Run redis server in docker 
docker run -d --name redis -p 6379:6379 redis:7-alpine 

# Run rabbitMq server in docker 
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

# Open RabbitMQ UI
http://localhost:15672
Login: 
Username: guest
Password: guest

# To know how many containers running
docker ps

# Run all container using Yml file