import { Component } from '@angular/core';
import { Product } from './shared/models/mobileProd';
import { mobileProductDetails } from './shared/const/mobilePro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '7th-attribule-Directive-ngFor';
  mobileProd:Array<Product>=mobileProductDetails;
}
