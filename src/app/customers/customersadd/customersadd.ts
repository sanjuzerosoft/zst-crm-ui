import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-customersadd',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './customersadd.html',
  styleUrl: './customersadd.css',
})
export class Customersadd {

  customer = {
    first_name: '',
    last_name: '',
    customer_assignee: '',
    customer_status: '',
    mobile: '',
    email: '',
    company_name: '',
    industry_type: '',
    customer_source: '',
    website: '',
    door_no: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zip_code: '',
    description: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  async saveCustomer() {
    const apiUrl = 'http://127.0.0.1:8000/api/post_customers';
    
    try {
      const response = await firstValueFrom(this.http.post(apiUrl, this.customer));
      console.log('customer saved successfully:', response);
      this.router.navigate(['/customers']);
    } catch (error) {
      console.error('Error saving customer:', error);
      // Optionally show user-friendly error message
      alert('Failed to save customer. Please try again.');
    }
  }

  clearForm() {
    this.customer = {
      first_name: '',
      last_name: '',
      customer_assignee: '',
      customer_status: '',
      mobile: '',
      email: '',
      company_name: '',
      industry_type: '',
      customer_source: '',
      website: '',
      door_no: '',
      street: '',
      city: '',
      state: '',
      country: '',
      zip_code: '',
      description: '',
    };
  }

  goBack() {
    this.router.navigate(['/customers']);
  }
}
