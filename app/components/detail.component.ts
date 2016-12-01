import {Component, Input} from '@angular/core';
import {Client} from '../models/client.model';

@Component({
    selector: 'client-detail',
    template: `
        <div class="media client-detail" *ngIf="client !== null">
            <div class="media-left">
                <img [src]="client.general.avatar" class="media-object avatar img-rounded" >
            </div>
            <div class="media-body">
                <h2 class="media-heading">{{ client.general.firstName }} {{ client.general.lastName }}</h2>
                <h3>{{ client.job.title}} - {{ client.job.company }}</h3>
                
                <div class="panel panel-default">
                    <div class="panel-heading">Contact Information</div>
                    <div class="panel-body">
                        <p>
                            <i class="fa fa-phone"></i>
                            {{ client.contact.phone}}
                        </p>
                        <p>
                            <i class="fa fa-envelope"></i>
                            {{ client.contact.email}}
                        </p>
                        <p>{{ client.address.street }}</p>
                        <p>{{ client.address.zipCode }} {{ client.address.City }}</p>
                        <p class="country">
                          {{ client.address.country }}
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div *ngIf="client === null" class="client-detail">
            Please select Client from the list
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
        .client-detail {
            padding-top: 15px;
        }
    `]
})

export class DetailComponent {
    @Input() client: Client;
}