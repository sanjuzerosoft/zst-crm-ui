import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadsadd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leadsadd.html',
  styleUrl: './leadsadd.css',
})
export class Leadsadd {

  lead = {
    name: '',
    email: '',
    mobile: '',
    notes: ''
  };

  constructor(private router: Router) {}

  saveLead() {
    console.log('Lead saved:', this.lead);

    // Later: send to API
    // this.http.post('/api/leads', this.lead)

    this.router.navigate(['/leads']);
  }

  clearForm() {
    this.lead = {
      name: '',
      email: '',
      mobile: '',
      notes: ''
    };
  }

  goBack() {
    this.router.navigate(['/leads']);
  }
}
