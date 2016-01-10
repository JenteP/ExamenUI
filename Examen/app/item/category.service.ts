import {Injectable} from 'angular2/core';
import {CATEGORIES} from './mock-categories';
import {Category} from "./category";

@Injectable()
export class CategoryService {
    getCategories():Promise<Category[]> {
        return Promise.resolve(CATEGORIES);
    }

    getCategory(name: string):Promise<Category> {
        return this.getCategories().then(
            cats =>
                cats.filter(cat => cat.name == name)[0]
        );
    }
}