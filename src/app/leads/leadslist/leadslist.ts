import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../../header/header';

@Component({
  selector: 'app-leadslist',
  imports: [CommonModule,Header],
  templateUrl: './leadslist.html',
  styleUrl: './leadslist.css',
})
export class Leadslist {

  leads = [
    { id: 1, name: 'John Doe', email: 'john@mail.com', phone: '9876543210', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@mail.com', phone: '9123456780', status: 'Active' },
    { id: 3, name: 'Robert Brown', email: 'robert@mail.com', phone: '9988776655', status: 'Active' },
    { id: 4, name: 'Emily Clark', email: 'emily@mail.com', phone: '9876501234', status: 'Active' },
    { id: 5, name: 'Michael Lee', email: 'michael@mail.com', phone: '9090909090', status: 'Active' },
    { id: 6, name: 'Sarah Wilson', email: 'sarah@mail.com', phone: '9887766554', status: 'Active' },
    { id: 7, name: 'David Miller', email: 'david@mail.com', phone: '9876123456', status: 'Active' },
    { id: 8, name: 'Sophia Taylor', email: 'sophia@mail.com', phone: '9797979797', status: 'Active' },
    { id: 9, name: 'Daniel Anderson', email: 'daniel@mail.com', phone: '9666555444', status: 'Active' },
    { id: 10, name: 'Olivia Thomas', email: 'olivia@mail.com', phone: '9555666777', status: 'Active' }
  ];

  editLead(id: number) {
    console.log('Edit lead:', id);
  }

  deleteLead(id: number) {
    console.log('Delete lead:', id);
  }

  get totalLeads(): number {
  return this.leads.length;
}




  constructor(private router: Router) {}
  AddLeads() {
    this.router.navigate(['/leadsadd']);
  }
}
