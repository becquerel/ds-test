import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'client-search',
    template: `
        <div class="form-group client-search-component">
            <label for="client-search-input">Search Clients</label>
            <input type="text" class="form-control" id="client-search-input"
                [(ngModel)]="searchText" 
                (ngModelChange)="searchChanged.emit(searchText)" />
        </div>
        
    `,
    styles: [`
        .client-search-component {
            padding-top: 15px;
        }
    `]
})

export class SearchComponent {
    @Input() searchText: string;
    @Output() searchChanged: EventEmitter<any> = new EventEmitter();
}