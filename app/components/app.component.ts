import {Component, OnInit} from '@angular/core';
import {ClientService} from '../services/client.service';
import {Client} from "../models/client.model";

@Component({
    selector: 'direct-services-clients',
    template: `
        <div class="row">
            <div class="col-xs-12">
                <h1>Direct-Services Clients</h1>    
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-4">
                <div>
                    <client-search [searchText]="searchText" (searchChanged)="search($event)"></client-search>
                </div>
                <div>
                    <client-list [clients]="clients" [activeClient]="activeClient" [searchText]="searchText" (clientSelected)="selectClient($event)"></client-list>
                </div>    
            </div>
            
            <div class="col-sm-8">
                <client-detail [client]="activeClient"></client-detail>
            </div>
        </div>
        
        
  `,
    providers: [ClientService]
})

export class AppComponent implements OnInit {

    private clients: Client[];
    private activeClient: Client = null;
    private searchText: string = '';

    constructor(private _clientService: ClientService) {
    }

    ngOnInit() {
        this._clientService.getClients().subscribe(clients => this.clients = clients);
    }

    selectClient(client: Client) {
        this.activeClient = client;
    }

    search(searchText: string) {
        this.searchText = searchText;
    }

}
