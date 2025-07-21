import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 reviews = [
    {
      name: 'Ali R.',
      message: 'Excellent plumbing service. Very professional and on time!',
      rating: 5
    },
    {
      name: 'Fatima S.',
      message: 'Quick response and solved the leakage in minutes. Recommended!',
      rating: 4
    },
    {
      name: 'Zain A.',
      message: 'Courteous staff and clean installation. Would hire again.',
      rating: 5
    },
    {
      name: 'Sarah M.',
      message: 'Good service, but arrived a little late. Overall okay.',
      rating: 3
    },
    {
      name: 'Umar N.',
      message: 'Solved a long-standing drainage issue. Great work!',
      rating: 5
    },
    {
      name: 'Hira K.',
      message: 'Easy to book, came with all tools. Satisfied with service.',
      rating: 4
    }
  ];
}
