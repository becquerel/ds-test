import {Pipe, PipeTransform} from "@angular/core";

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
    transform(clients, searchString){
        // no filter, return all clients right away
        if (searchString === '') {
            return clients;
        }

        let filteredClients = [];
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


