// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='https://localhost:44351/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adConfig: {
    clientId: '058f13d6-9095-45fc-bbac-cf29f1d34e50',
    readScopeUrl: 'https://agvantisbtoc.onmicrosoft.com/agvantis/api/Expense.Read',
    writeScopeUrl: 'https://agvantisbtoc.onmicrosoft.com/agvantis/api/Expense.Write',
    scopeUrls: [
      'https://agvantisbtoc.onmicrosoft.com/agvantis/api/Expense.Read',
      'https://agvantisbtoc.onmicrosoft.com/agvantis/api/Expense.Write'
    ],
    apiEndpointUrl: 'https://localhost:44351/api',
    tenantId: "3c7863c9-7d8f-4833-8072-ed0d4407ffb5"
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// run this app in 4200 port

/*
azure ad user credentials, it will not work after 15 days of I created, comment in channel to send you new one

karthik@learnsmartcodinggmail.onmicrosoft.com or kannan@learnsmartcodinggmail.onmicrosoft.com
LSCamu745406
*/