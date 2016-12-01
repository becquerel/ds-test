import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {User} from '../models/user.model';


@Injectable()
export class UserService {
    private _apiEndpoint = 'http://localhost:3000/clients.json';

    /**
     *
     * @param _http
     */
    constructor(private _http: Http) {}

    /**
     * loads all users from the API endpoint
     * @todo there is a potential to improvement here, if we don't want to load all users at once, we could pass
     * filter value to the API, so the backend endpoint would return already filtered values
     * @returns {Observable<R>}
     */
    getUsers() {
        return this._http.get(this._apiEndpoint)
            .map(response => <User[]> response.json());
    }
}