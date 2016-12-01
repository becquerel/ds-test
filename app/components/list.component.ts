import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Client} from '../models/client.model';

@Component({
    selector: 'client-list',
    template: `
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let client of clients | searchClient:searchText" 
                (click)="clientSelected.emit(client)" 
                [class.active]="isSelectedClient(client)">
                
                <span class="pull-right">
                    <img class="avatar img-rounded" [src]="client.general.avatar" />
                </span>  
                <div><strong>{{ client.general.firstName }} {{ client.general.lastName }}</strong></div>
                <div>{{ client.job.title }}</div>
            </li>
        </ul>
    `,
    styles: [`
        .avatar {
            width: 40px;
            height: 40px;
        }
    `]
})

export class ListComponent {
    @Input() clients: Client[];
    @Input() activeClient: Client;
    @Input() searchText: string;
    @Output() clientSelected: EventEmitter<any> = new EventEmitter();

    isSelectedClient(client: Client) {
        return this.activeClient === client;
    }

}