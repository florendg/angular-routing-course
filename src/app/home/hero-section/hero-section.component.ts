import {Component} from '@angular/core';
import {SubHeroLogoComponent} from "../../shared-ui/sub-hero-logo/sub-hero-logo.component";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  imports: [SubHeroLogoComponent]
})
export class HeroSectionComponent {
  image = '../../assets/images/hero-1.png';
}
