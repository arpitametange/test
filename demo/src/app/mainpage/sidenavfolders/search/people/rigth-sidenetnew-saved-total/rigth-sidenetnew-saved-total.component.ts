import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rigth-sidenetnew-saved-total',
  templateUrl: './rigth-sidenetnew-saved-total.component.html',
  styleUrls: ['./rigth-sidenetnew-saved-total.component.css']
})
export class RigthSidenetnewSavedTotalComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  isPeopleRoute(): boolean {
    const segments: string[] = this.router.url.split('/');
    return segments.includes('right');
  }
  



  
}
