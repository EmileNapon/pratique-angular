import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Assurance vie'
  showSearch: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }  
 

}