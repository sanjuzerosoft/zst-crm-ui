import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customersview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customersview.html',
  styleUrl: './customersview.css',
})
export class Customersview {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/customers']);
  }
}
