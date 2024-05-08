import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SubscribeComponent } from "../subscribe/subscribe.component";
import { About2Component } from "../about2/about2.component";
import { WhyComponent } from "../why/why.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent ,
		 SubscribeComponent, About2Component, WhyComponent, FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
