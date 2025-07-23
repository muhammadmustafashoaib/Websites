import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Service {
  readonly title: string;
  readonly description: string;
  readonly image: string;
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ServicesComponent {
   readonly services: ReadonlyArray<Service> = [
    {
      title: 'Emergency Repairs',
      description: 'Available 24/7 for urgent leaks, bursts, and breakdowns.',
      image: 'https://media.istockphoto.com/id/644996994/photo/plumbing-mishap.webp?s=1024x1024&w=is&k=20&c=-XDISuHzhGJv0jGewNUicHsrhaSPUbz-kbf7uOFGQuk='
    },
    {
      title: 'Water Heater Installation',
      description: 'Energy-efficient systems installed & serviced by experts.',
      image: 'https://images.pexels.com/photos/11211127/pexels-photo-11211127.jpeg?_gl=1*e7hrxs*_ga*MTIxOTk4Mjg4My4xNzUyODMyMjU3*_ga_8JE65Q40S6*czE3NTMyNTMyNDQkbzIkZzEkdDE3NTMyNTQwNTgkajYwJGwwJGgw'
    },
    {
      title: 'Bathroom Renovation',
      description: 'Complete bathroom upgrades, fixtures & plumbing done right.',
      image: 'https://images.pexels.com/photos/8142054/pexels-photo-8142054.jpeg?_gl=1*1prusrs*_ga*MTIxOTk4Mjg4My4xNzUyODMyMjU3*_ga_8JE65Q40S6*czE3NTMyNTMyNDQkbzIkZzEkdDE3NTMyNTQwOTAkajI4JGwwJGgw'
    },
    {
      title: 'Drain Cleaning',
      description: 'Clogged drains cleared quickly and thoroughly.',
      image: 'https://images.pexels.com/photos/9462312/pexels-photo-9462312.jpeg?_gl=1*1izmghr*_ga*MTIxOTk4Mjg4My4xNzUyODMyMjU3*_ga_8JE65Q40S6*czE3NTMyNTMyNDQkbzIkZzEkdDE3NTMyNTQxMzkkajQ5JGwwJGgw'
    },
    {
      title: 'Leak Detection',
      description: 'State-of-the-art tools to find & fix hidden leaks fast.',
      image: 'https://images.pexels.com/photos/699823/pexels-photo-699823.jpeg?_gl=1*1pd10c9*_ga*MTIxOTk4Mjg4My4xNzUyODMyMjU3*_ga_8JE65Q40S6*czE3NTMyNTMyNDQkbzIkZzEkdDE3NTMyNTQxNzckajExJGwwJGgw'
    },
    {
      title: 'Shower Installation',
      description: 'Modern, water-saving showers installed & serviced.',
      image: 'https://images.pexels.com/photos/6436789/pexels-photo-6436789.jpeg?_gl=1*1titj5t*_ga*MTIxOTk4Mjg4My4xNzUyODMyMjU3*_ga_8JE65Q40S6*czE3NTMyNTMyNDQkbzIkZzEkdDE3NTMyNTQyMTgkajU1JGwwJGgw'
    },
    {
      title: 'Toilet Repairs',
      description: 'Fast fixes & replacements for all toilet problems.',
      image: 'https://media.istockphoto.com/id/1454928260/photo/a-person-holding-an-adjustable-wrench-with-an-open-tank-exposing-the-interior-valve-and-lever.jpg?s=1024x1024&w=is&k=20&c=nFMaDbG779h0TcG-U_AssPVWPYsToNeiKeQi8DKxpEI='
    },
    {
      title: 'Kitchen Plumbing',
      description: 'Sinks, dishwashers, garbage disposals, and more.',
      image: 'https://images.pexels.com/photos/861414/pexels-photo-861414.jpeg?_gl=1*cd7840*_ga*MTIxOTk4Mjg4My4xNzUyODMyMjU3*_ga_8JE65Q40S6*czE3NTMyNTMyNDQkbzIkZzEkdDE3NTMyNTQzODUkajM3JGwwJGgw'
    },
    {
      title: 'Pipe Replacement',
      description: 'We replace old, damaged, or corroded pipes with durable materials.',
      image: 'https://images.pexels.com/photos/12880833/pexels-photo-12880833.jpeg'
    }
  ];;
}
