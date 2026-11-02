# Three-Tier Web Application on AWS

A three-tier web application project using AWS infrastructure, with separate web, application, and database layers.

## Repository contents

- `application-code/` — frontend and backend application source code
- `docs/` — project documentation PDF
- `3- tier-documentation-by-me.pdf` — documentation included in the original project archive

## Architecture

The application is organized into three layers:

1. **Web tier** — frontend served through Nginx.
2. **Application tier** — Node.js backend.
3. **Database tier** — MySQL-compatible Amazon RDS/Aurora database.

The AWS deployment documentation describes networking, subnets, route tables, security groups, load balancers, EC2, Auto Scaling, S3, IAM, and database setup.

## Before running

1. Review the documentation and adapt AWS resource names, regions, and network settings to your account.
2. Configure database connection values for your environment.
3. Install the dependencies in the relevant application directories.
4. Do not commit passwords, access keys, private keys, `.env` files, or other secrets.

### Database configuration

`application-code/app-tier/DbConfig.js` uses environment-variable placeholders. Set these values in your deployment environment:

- `DB_HOST`
- `DB_USER`
- `DB_PWD`
- `DB_DATABASE`

Never replace the placeholders with real credentials in a public commit.

## Important security note

This repository is intended as a project reference. Review all configuration and documentation screenshots before publishing. If any credential was previously used or exposed, rotate it in AWS.

## Documentation

See the PDF files in the `docs/` directory and the original project documentation at the repository root.

## License

No license is included. Add a license only if you have the right to distribute all included code and documentation.
