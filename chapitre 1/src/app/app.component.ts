import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Assurance vie'
  
 public list=[{nom:"Thomas Hardy",adresse:"thomashardy@mail.com",rue:"89 Chiaroscuro Rd, Portland, USA", number:"(171) 555-2222"},
              {nom:"Dominique Perrier",adresse:"dominiqueperrier@mail.com",rue:"Obere Str. 57, Berlin, Germany", number:"(313) 555-5735"},
              {nom:"Maria Anders",adresse:"mariaanders@mail.com",rue:"25, rue Lauriston, Paris, France", number:"(503) 555-9931"},
              {nom:"Fran Wilson",adresse:"franwilson@mail.com",rue:"C/ Araquil, 67, Madrid, Spain", number:"(204) 619-5731"},
              {nom:"Thomas Hardy",adresse:"thomashardy@mail.com",rue:"89 Chiaroscuro Rd, Portland, USA", number:"(171) 555-2222"},
              {nom:"Dominique Perrier",adresse:"dominiqueperrier@mail.com",rue:"Obere Str. 57, Berlin, Germany", number:"(313) 555-5735"},
              {nom:"Maria Anders",adresse:"mariaanders@mail.com",rue:"25, rue Lauriston, Paris, France", number:"(503) 555-9931"},
              {nom:"Fran Wilson",adresse:"franwilson@mail.com",rue:"C/ Araquil, 67, Madrid, Spain", number:"(204) 619-5731"}]
}