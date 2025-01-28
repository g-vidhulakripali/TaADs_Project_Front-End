import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fixed typo: `styleUrl` to `styleUrls`
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateHome(): void {
    // Navigate to the home route and refresh its state
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
