/**
 * Created by Jente on 3/01/2016.
 */
import {bootstrap} from 'angular2/platform/browser'
import {Factory} from './factory.component'
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(Factory, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);