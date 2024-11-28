import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: true,

    ROOT_DOMAIN_URL: 'https://polite-island-02ad37803.5.azurestaticapps.net',

    // Full backend API URL
    dataApiUrl:
        'https://api-to-do-ghf4ducsanarb4cf.westeurope-01.azurewebsites.net',

    // MongoDB connection string (keep this sensitive data secure)
    MONGO_DB_CONNECTION_STRING:
        'mongodb+srv://jsnels:cg2mh2E25GQ3Qn9@to-do.pxd9m.mongodb.net/'
};
