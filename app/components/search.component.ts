import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'client-search',
    template: `<input [(ngModel)]="searchText" type="text" (keyup)="search()" />`
})

export class SearchComponent {
    @Input() searchText: string;
    @Output() searchChanged: EventEmitter<any> = new EventEmitter();

    search() {
        this.searchChanged.emit(this.searchText);
    }
}