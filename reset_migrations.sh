# This file is not meant to be executed. Merely a reference for doing this step by step.


# dump the postgres database (DATA ONLY)
pg_dump --data-only dbname > dump.sql

# Create a new database that will replace your old one
psql -U pguser --password
=# CREATE DATABASE newdb;

# typically, I would just delete from within vscode or on the command line manually. Here's a fancy way
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete

# Create new migration files now that old ones aren't there, will only create 1 per app
python manage.py makemigrations

# Update the database in your settings file
vim settings.py

python manage.py migrate

# load the data back into the now structured databae
psql newdb < dump.sql

# Note this works since psql will just give an error for the data migrate has already written. For example
# ERROR:  duplicate key value violates unique constraint "django_content_type_pkey"
# DETAIL:  Key (id)=(1) already exists.
# CONTEXT:  COPY django_content_type, line 1
# ERROR:  duplicate key value violates unique constraint "auth_permission_pkey"
# DETAIL:  Key (id)=(1) already exists.
# CONTEXT:  COPY auth_permission, line 1
# ERROR:  duplicate key value violates unique constraint "django_migrations_pkey"
# DETAIL:  Key (id)=(1) already exists.
# CONTEXT:  COPY django_migrations, line 1
