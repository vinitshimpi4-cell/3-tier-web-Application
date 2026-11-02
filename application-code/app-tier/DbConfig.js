// Configure these values for your own AWS environment.
// Do not commit real database credentials to a public repository.
module.exports = Object.freeze({
    DB_HOST: process.env.DB_HOST || "YOUR_RDS_ENDPOINT",
    DB_USER: process.env.DB_USER || "YOUR_DB_USERNAME",
    DB_PWD: process.env.DB_PWD || "YOUR_DB_PASSWORD",
    DB_DATABASE: process.env.DB_DATABASE || "webappdb",
});
