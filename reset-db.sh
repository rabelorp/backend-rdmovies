#!/bin/bash

set -e  # Stop the script in case of an error

# Drop the database schema
npm run schema:drop
sleep 2  

# Remove migration files matching the '*-rdmovies.ts' pattern
rm -f src/database/migrations/*-rdmovies.ts
sleep 2  

# Generate new migrations
npm run migration:generate -- src/database/migrations/rdmovies
sleep 2  

# Run the migrations
npm run migration:run
sleep 2  

# Run the seeders
npm run seed:run:relational
