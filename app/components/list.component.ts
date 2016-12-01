import {Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../models/user.model';

@Component({
    selector: 'user-list',
    template: `
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users | searchClient:searchText" (click)="userSelected.emit(user)" [class.active]="isSelectedUser(user)">
                <span class="pull-right">
                    <img [src]="user.general.avatar" width="30" height="30" />
                </span>  
                <div><strong>{{ user.general.firstName }} {{ user.general.lastName }}</strong></div>
                <div>{{ user.job.title }}</div>
            </li>
        </ul>
    `
})

export class ListComponent {
    @Input() users: User[];
    @Input() activeUser: User;
    @Input() searchText: string;
    @Output() userSelected: EventEmitter<any> = new EventEmitter();

    selectedUser: User = null;

    isSelectedUser(user: User) {
        return this.activeUser === user;
    }

}