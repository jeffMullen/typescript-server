import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNANE = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1137;

const SERVER = {
    hostname: SERVER_HOSTNANE,
    port: SERVER_PORT
};

const config = {
    server: SERVER
};

export default config;
