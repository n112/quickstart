import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'customerTable',
    template: `<h1>customer Table</h1>

    <table border="1">
    <tr><td>ID</td><td>Name</td></tr>
    <tr>
    <td>{{customerTable1.id}}</td>
    <td>{{customerTable1.name}}</td>
    </tr>
    </table>

`
})

export class CustomerTableComponent {
@Input()
customerTable1: Customer;

constructor() {
this.customerTable1 = new Customer();

this.customerTable1.id=1;
this.customerTable1.name="aaa";

}
}