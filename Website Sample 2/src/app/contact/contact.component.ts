import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    bookingDate: '',
    bookingTime: '',
    isValid: false,
    status: ''
  };

  validateForm() {
    this.formData.isValid = !!(this.formData.name && this.formData.phone);
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.validateForm();

    if (!this.formData.isValid) {
      this.formData.status = '❌ Please fill all required fields.';
      return;
    }

    const form = new FormData();
    form.append('name', this.formData.name);
    form.append('email', this.formData.email);
    form.append('phone', this.formData.phone);
    form.append('message', this.formData.message);
    form.append('service', this.formData.service);
    form.append('bookingDate', this.formData.bookingDate);
    form.append('bookingTime', this.formData.bookingTime);

    fetch('https://formsubmit.co/ajax/mustafashoaib1999@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: form
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === 'true') {
          this.formData.status = '✅ Message sent successfully!';
          this.formData.name = this.formData.email = this.formData.phone = this.formData.message = this.formData.service = this.formData.bookingDate = this.formData.bookingTime = '';
        } else {
          this.formData.status = '❌ Failed to send message.';
        }
      })
      .catch(() => {
        this.formData.status = '❌ Network error. Please try again later.';
      });
  }
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
