import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrl: './front-end.component.css',
})
export class FrontEndComponent {
  searchQuery: string = '';
  searchResults: any;
  loading: boolean = false;
  generatedText: string | null = null; // Displayed text
  fullGeneratedText: string = ''; // Full text to type out
  typingInterval: any; // Typing interval for typewriter effect

  constructor(private searchService: SearchService) {}

  // Method to perform search
  onSearch() {
    if (this.searchQuery.trim()) {
      this.loading = true;
      this.searchResults = null;
      this.generatedText = null; // Clear previous generated text
      this.fullGeneratedText = ''; // Clear previous full text
      clearInterval(this.typingInterval); // Clear any existing typing intervals

      this.searchService.search(this.searchQuery).subscribe(
        (response) => {
          this.searchResults = response;
          console.log('Search results:', this.searchResults);
          this.loading = false;
        },
        (error) => {
          console.error('Error:', error);
          this.loading = false;
        }
      );
    }
  }

  // Method to simulate generative text with typewriter effect
  generateText() {
    this.fullGeneratedText = `This is a generated response based on your query: "${this.searchQuery}"`;
    this.generatedText = '';
    let index = 0;

    // Start typing the text one character at a time
    this.typingInterval = setInterval(() => {
      if (index < this.fullGeneratedText.length) {
        this.generatedText += this.fullGeneratedText[index];
        index++;
      } else {
        clearInterval(this.typingInterval); // Stop the typing effect when done
      }
    }, 50); // Adjust typing speed (in milliseconds) as needed
  }
}
