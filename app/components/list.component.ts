import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Client} from '../models/client.model';

@Component({
    selector: 'client-list',
    template: `
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let client of clients | searchClient:searchText" 
                [class.active]="isSelectedClient(client)">

                <a href="#client-detail" (click)="clientSelected.emit(client)">
                    <span class="pull-left">
                        <img class="avatar img-rounded" [src]="client.general.avatar" />
                    </span>  
                    <div><strong>{{ client.general.firstName }} {{ client.general.lastName }}</strong></div>
                    <div>{{ client.job.title }}</div>
                </a>
            </li>
        </ul>
    `,
    styles: [`
        .avatar {
            width: 40px;
            height: 40px;
            margin-right: 15px;
        }
        
        a {
            color: black;
            text-decoration: none;
        }
        
        li:hover {
            background-color: #eeeeee;
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