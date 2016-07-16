import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'customerTable',
    template: `<h1>customer Table</h1>

<button (click)="clicked()">ADD</button>

    <table border="1">
    <tr><td>ID</td><td>Name</td></tr>
    <tr>
    <td>{{customerTable1.id}}</td>
    <td>{{customerTable1.name}}</td>
    </tr>

    <tr *ngFor='let c of customerArry'>
    <td>{{c.id}}</td>
    <td>{{c.name}}</td>
    </tr>

    </table>


   


`
})

export class CustomerTableComponent {
@Input()
customerTable1: Customer;
customerArry: Customer[];

constructor() {
this.customerTable1 = new Customer();

this.customerTable1.id=1;
this.customerTable1.name="aaa";

this.customerArry = [];
this.customerArry.push(new Customer());
this.customerArry[0].id=2;
this.customerArry[0].name="bbb";
this.customerArry.push(new Customer());
this.customerArry[1].id=3;
this.customerArry[1].name="ccc";
}

clicked() {
this.customerArry.push(new Customer());
this.customerArry[this.customerArry.length-1].id=this.customerArry.length+1;
this.customerArry[this.customerArry.length-1].name="zzz";
  }

}

