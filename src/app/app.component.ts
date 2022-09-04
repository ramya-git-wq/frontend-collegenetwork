
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'collegesocialnetwork';
  constructor(private router: Router) {
  }
  
  enterMarks() {
  this.router.navigate(['EnterMarks']);
  }

  updateMarks() {
    this.router.navigate(['UpdateMarks']);
  }
    createList() {
      this.router.navigate(['CreateList']);
    }
      logout() {
        this.router.navigate(['LogOut']);
      }
      
}


