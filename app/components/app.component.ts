import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from "../models/user.model";

@Component({
  selector: 'direct-services-users',
  template:`
        <div class="row">
            <div class="col-xs-12">
                <h1>Direct-Services Users</h1>    
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-4">
                <div>
                    <user-search></user-search>
                </div>
                <div>
                    <user-list [users]="users"></user-list>
                </div>    
            </div>
            
            <div class="col-sm-8">
                <user-detail></user-detail>
            </div>
        </div>
        
        
  `,
  providers: [UserService]
})

export class AppComponent implements OnInit {

  private users: User[];

  constructor(private _userService: UserService) {}

  ngOnInit(){
    this._userService.getUsers().subscribe(users => this.users = users);
  }

}
