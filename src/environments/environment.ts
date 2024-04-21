// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //apirest local
  // apiUrl: "http://127.0.0.1:8000/api",
  // apiUrlMedia: "http://127.0.0.1:8000/storage/",
  //remoto
  apiUrl: "https://svcbmf.com/backend-api-svcbmf/public/api",
  apiUrlMedia: "https://svcbmf.com/backend-api-svcbmf/storage/app/",
  //ci3
  // baseUrl: 'http://localhost:8888/proyectos/CI3Server/svcbmf/server/',
  // imageUrl: 'http://localhost:8888/proyectos/CI3Server/svcbmf/server/media/images/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
