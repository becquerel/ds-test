import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'client-search',
    template: `
        <div class="form-group client-search-component">
            <label for="client-search-input">Search Clients</label>
            <input [(ngModel)]="searchText" type="text" (keyup)="search()" class="form-control" id="client-search-input" />
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

    search() {
        this.searchChanged.emit(this.searchText);
    }
}