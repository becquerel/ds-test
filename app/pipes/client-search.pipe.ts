import {Pipe, PipeTransform} from "@angular/core";
import {User} from "../models/user.model";

@Pipe({
    name: 'searchClient'
})

export class ClientSearchPipe implements PipeTransform {
    /**
     *
     * @param clients
     * @param searchString
     * @returns {any}
     */
    transform(clients: User[], searchText: string) {
        // no filter, return all clients right away
        if (searchText === '') {
            return clients;
        }

        let filteredClients: User[] = [];
        if (searchText !== '' && clients) {
            clients.forEach(client => {
                if (this.matchClient(client, searchText)) {
                    filteredClients.push(client);
                }
            });
        }

        return filteredClients;
    }

    matchClient(client: User, searchText: string): boolean {

        return true;
    }
}


