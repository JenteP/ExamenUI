/**
 * Created by Jente on 3/01/2016.
 */
import {Injectable} from 'angular2/core';
import {HALLS} from './mock-halls';
import {Hall} from "./hall";

@Injectable()
export class HallService {
    getHalls() {
        return Promise.resolve(HALLS);
    }
    getHallsSlowly() {
        return new Promise<Hall[]>(
            resolve => setTimeout(()=>resolve(HALLS),2000)
        );
    }
}