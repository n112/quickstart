
import { Component } from '@angular/core';
import { Customer } from './customer';
import { CustomerComponent } from './customer.component';
import { CustomerTableComponent } from './customerTable.component';



@Component({
    selector: 'my-app',
    template: `<h1>Angular 2 App</h1>

                and input:              
                <input [(ngModel)]="customer2.name" type="text" name="lname">
                
                <p>The sum of 1 + 1 is {{1 + 1}}</p>
                <p>name of customer is: {{customer2.name}}</p>

             <P>2</P>

             <cust [customer1]="customer2" ></cust>

             <button>ADD</button>

              <customerTable></customerTable>

             `,
    directives: [CustomerComponent, CustomerTableComponent]
   

})
export class AppComponent {


customer2: Customer = {
    id: 1,
    name: 'aaa'
};

}

