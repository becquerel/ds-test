import {Pipe, PipeTransform} from "@angular/core";
import {Client} from "../models/client.model";

@Pipe({
    name: 'searchClient'
})

export class ClientSearchPipe implements PipeTransform {

    /**
     * searches all client entries and properties for searchText
     * @param clients
     * @param searchText
     * @returns {any}
     */
    transform(clients: Client[], searchText: string) {
        // no filter is set, return all clients right away
        if (searchText === '') {
            return clients;
        }

        let filteredClients: Client[] = []; // by default, filtered clients list is empty

        // convert search string to RegExp here (so it is done only once)
        let searchRegex = new RegExp(searchText, 'i');

        if (clients) {  // make sure we have some clients here
            clients.forEach(client => {
                if (this.matchClient(client, searchRegex)) {
                    filteredClients.push(client);
                }
            });
        }

        return filteredClients;
    }

    /**
     * match individual client against RegExp in the values
     * @param client
     * @param searchRegex
     * @returns {boolean}
     */
    matchClient(client: Client, searchRegex: RegExp): boolean {
        return this.matchObject(client, searchRegex);
    }

    /**
     * matches object properties against RegExp
     * @param object
     * @param searchRegex
     * @returns {boolean}
     */
    matchObject(object: any, searchRegex: RegExp): boolean {
        let match:boolean = false;

        for (let property in object) {
            let fieldValue = object[property];

            if (typeof fieldValue === 'object') { // if object property is nested object, recursively call this method
                match = match || this.matchObject(fieldValue, searchRegex)
            } else if (['number', 'string'].indexOf(typeof fieldValue) >= 0) {  // scalar type, try to match directly
                // typecast to string; we should not have numeric types in our app, but this makes function more
                // reusable if clients will have more attributes in the future
                fieldValue = String(fieldValue);
                match = match || fieldValue.match(searchRegex) !== null
            }
        }

        return match;
    }
}


