import {Pipe, PipeTransform} from "@angular/core";
import {Client} from "../models/client.model";

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
    transform(clients: Client[], searchText: string) {
        // no filter, return all clients right away
        if (searchText === '') {
            return clients;
        }

        let filteredClients: Client[] = [];
        if (searchText !== '' && clients) {
            clients.forEach(client => {
                if (this.matchClient(client, searchText)) {
                    filteredClients.push(client);
                }
            });
        }

        return filteredClients;
    }

    matchClient(client: Client, searchText: string): boolean {

        return true;
    }
}


