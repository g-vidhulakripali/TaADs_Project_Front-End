import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrl: './front-end.component.css'
})
export class FrontEndComponent {
  searchQuery: string = '';
  searchResults: any;

  constructor(private searchService: SearchService) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      this.searchService.search(this.searchQuery).subscribe(
        (response) => {
          this.searchResults = response;
          console.log('Search results:', this.searchResults);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

}
