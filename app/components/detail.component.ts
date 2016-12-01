import {Component, Input} from '@angular/core';
import {User} from '../models/user.model';

@Component({
    selector: 'user-detail',
    template: `
        <div class="media" *ngIf="user !== null">
          <div class="media-left">
            <img [src]="user.general.avatar" class="media-object avatar img-rounded" >
          </div>
          <div class="media-body">
            <h2 class="media-heading">{{ user.general.firstName }} {{ user.general.lastName }}</h2>
            <h3>{{ user.job.title}} - {{ user.job.company }}</h3>
            
            <div class="panel panel-default">
              <div class="panel-heading">Contact Information</div>
              <div class="panel-body">
                <p>
                    <i class="fa fa-phone"></i>
                    {{ user.contact.phone}}
                </p>
                <p>
                    <i class="fa fa-envelope"></i>
                    {{ user.contact.email}}
                </p>
                <p>{{ user.address.street }}</p>
                <p>{{ user.address.zipCode }} {{ user.address.City }}</p>
                <p class="country">
                  {{ user.address.country }}
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
        
        <div *ngIf="user === null">
            Please select User
        </div>
    `,
    styles: [`
        .avatar {
            width: 128px;
            height: 128px;
        }
        .country {
            font-weight: bold;
        }
    `]
})

export class DetailComponent {
    @Input() user: User;
}