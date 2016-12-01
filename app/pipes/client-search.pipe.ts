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
    transform(clients: User[], searchString: string){
        // no filter, return all clients right away
        if (searchString === '') {
            return clients;
        }

        let filteredClients: User[] = [];
        if (searchString !== '' && clients) {
            clients.forEach(client => {
                if (client.general.firstName == searchString) {
                    filteredClients.push(client);
                }
            });
        }

        return filteredClients;
    }
}


