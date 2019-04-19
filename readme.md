When first using, run `npm install` from the command line to install dependencies.

-To start server, run `npm start` from the command line.
-To start server in debug mode, on command line, use 'DEBUG=express-app:* npm start'
-To turn nodemon off (to not restart server when changes are made), change 'nodemon' to 'node' in package.json start script.

-Postgres directory: /usr/local/var/postgres
-To start PostgreSQL server, run `pg_ctl -D /usr/local/var/postgres start` in terminal.
-To stop PostgreSQL server, run  `pg_ctl -D /usr/local/var/postgres stop` in terminal.
-For more information of the pg_ctl command, go to https://www.postgresql.org/docs/10/static/app-pg-ctl.html.
-To start PostgreSQL console, run `psql` in terminal.
-To connect to database in psql console in terminal to then run queries/commands on it, run
  $ psql
    =# \c DATABASE_NAME
-To list all databases on the server, run `\list` or `\l` from psql console.
-To list all users/roles, run `\du` from psql console.
-To list all tables of a database, connect to that database and run `\dt` from psql console.
-To run a .sql script from the terminal run `$ psql -f FILENAME`. Be sure to add \c DATABASE_NAME to the top of the script to say which database to modify.
-To view a list of tables, run `\dt` from the psql console.
-To view the table details/schema, run `\d` TABLE_NAME from the psql console.
