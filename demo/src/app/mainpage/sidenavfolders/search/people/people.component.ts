import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  isPeopleRoute(): boolean {
    const segments: string[] = this.router.url.split('/');
    return segments.includes('left');
  }
}
