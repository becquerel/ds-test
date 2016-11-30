import { Component } from '@angular/core';

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
                    <user-list></user-list>
                </div>    
            </div>
            
            <div class="col-sm-8">
                <user-detail></user-detail>
            </div>
        </div>
        
        
  `,
})

export class AppComponent  { name = 'Direct-Services Users'; }
