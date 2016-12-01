import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'client-search',
    template: `
        <div class="form-group">
            <label for="client-search-input">Search Clients</label>
            <input [(ngModel)]="searchText" type="text" (keyup)="search()" class="form-control" id="client-search-input" />
        </div>
        
    `
})

export class SearchComponent {
    @Input() searchText: string;
    @Output() searchChanged: EventEmitter<any> = new EventEmitter();

    search() {
        this.searchChanged.emit(this.searchText);
    }
}