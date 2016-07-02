
import { Component } from '@angular/core';
import { Customer } from './customer.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>

                and input:              
                <input [(ngModel)]="customer.name" type="text" name="lname">
                
                <p>The sum of 1 + 1 is {{1 + 1}}</p>
                <p>name of customer is: {{customer.name}}</p>
             `

})
export class AppComponent {
customer: Customer = {
    id: 1,
    name: 'aaa'
};

}
