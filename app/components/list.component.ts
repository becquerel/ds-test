import {Component, Input} from '@angular/core';
import {User} from '../models/user.model';

@Component({
    selector: 'user-list',
    template: `
        <ul>
            <li *ngFor="let user of users">{{ user.general.firstName }} {{ user.general.lastName }}</li>
        </ul>
    `
})

export class ListComponent {
    @Input()
    users: User[];
}