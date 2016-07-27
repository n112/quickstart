import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:2995/api/customers';  // URL to web api  http://localhost:2995/api/customers
  constructor(private http: Http) { }
  getCustomers() {
    return this.http.get(this.customersUrl)
               .toPromise()
               .then(response => response.json() as Customer[])
               .catch(this.handleError);
  }
  getCustomer(id: number) {
    return this.getCustomers()
               .then(customers => customers.find(customer => customer.id === id));
  }

  save(customer: Customer): Promise<Customer>  {
    if (customer.id) {
      return this.put(customer);
    }
    return this.post(customer);
  }


  delete(customer: Customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.customersUrl}/${customer.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }
  // Add new Customer
  private post(customer: Customer): Promise<Customer> {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http
               .post(this.customersUrl, JSON.stringify(customer), {headers: headers})
               .toPromise()
               .then(result => result.json())
               .catch(this.handleError);
  }
  // Update existing Customer
  private put(customer: Customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.customersUrl}/${customer.id}`;
    return this.http
               .put(url, JSON.stringify(customer), {headers: headers})
               .toPromise()
               .then(() => customer)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
