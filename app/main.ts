import {AppComponent} from './app.component'

import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms } from '@angular/forms';//New form
import {HTTP_PROVIDERS} from '@angular/http'

import { appRouterProviders } from './app.routes';

import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
var appPromise = bootstrap(AppComponent, [
                                disableDeprecatedForms(),   //new Form
                                provideForms(),             //new Form

                                appRouterProviders,         //New router. Contain AuthService

                                HTTP_PROVIDERS,             //Needed for services

                                LocalStorageService         //Needed to store user status
                                ]);


// register LocalStorage, this registers our change-detection.
LocalStorageSubscriber(appPromise);


