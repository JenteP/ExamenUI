import {Injectable} from 'angular2/core';
import {CATEGORIES} from './mock-categories';
import {Category} from "./category";
import {Observable} from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class CategoryService {
    private http:Http = null;
    public static PATH: string = "back-end/categories/";

    constructor(http:Http) {
        this.http = http;
    }

    public getCategories():Observable<Category[]> {
        return this.http.get(CategoryService.PATH + 'Categories.json')
            .map((res: Response) => res.json());
    }

    /*getCategories():Promise<Category[]> {
        return Promise.resolve(CATEGORIES);
    }

    getCategory(name: string):Promise<Category> {
        return this.getCategories().then(
            cats =>
                cats.filter(cat => cat.name == name)[0]
        );
    }*/
}