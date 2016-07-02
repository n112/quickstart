import { Component,Input } from '@angular/core';
import { Customer } from './customer';

@Component ({
    selector: 'cust',
    template: ` {{customer1.name}}
    
    `
})
export class CustomerComponent {
@Input()
customer1:Customer;

constructor(){

}
}