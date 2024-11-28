import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: true,

    ROOT_DOMAIN_URL: 'https://polite-island-02ad37803.5.azurestaticapps.net',

    // Full backend API URL
    dataApiUrl: 'https://to-do-api.azurewebsites.net',

    // MongoDB connection string (keep this sensitive data secure)
    MONGO_DB_CONNECTION_STRING:
        'mongodb+srv://jsnels:cg2mh2E25GQ3Qn9@to-do.pxd9m@To-DO.mongodb.net/To-Do?retryWrites=true&w=majority'
};
