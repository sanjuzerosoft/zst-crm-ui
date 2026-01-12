import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient,  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leadslist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './leadslist.html',
  styleUrl: './leadslist.css',
})
export class Leadslist implements OnInit {

  leads: any[] = [];
  allLeads: any[] = [];   // backup list
  searchText: string = '';  //search input

  constructor(private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/get_leads')
      .subscribe({
        next: (data) => {
          this.leads = data;
          this.allLeads = data;
          console.log('Leads:', this.leads);
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching leads:', error);
        }
      });
  }

  onSearch() {
    const value = this.searchText.toLowerCase();

    this.leads = this.allLeads.filter(lead =>
      lead.name.toLowerCase().includes(value) ||
      lead.email.toLowerCase().includes(value) ||
      lead.phone.toLowerCase().includes(value)
    );
  }

  get totalLeads(): number {
    return this.leads.length;
  }

  AddLeads() {
    this.router.navigate(['/leads/add']);
  }

  editLead(id: number) {
    console.log('Edit lead:', id);
  }

  deleteLead(id: number) {
    console.log('Delete lead:', id);
  }
}
