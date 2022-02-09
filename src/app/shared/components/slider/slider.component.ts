import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  public slideConfig = {
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    mobileFirst: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 600,
  };

  public imgs: any = [];

  constructor(private homePageSrv: HomepageService) {}

  ngOnInit(): void {
    this.getHomepageMainSlidesImgs();
  }

  private getHomepageMainSlidesImgs() {
    if (window.innerWidth < 575) {
      this.imgs = this.homePageSrv.getHomepage().mobile;
    } else {
      this.imgs = this.homePageSrv.getHomepage().desktop;
    }
  }
}
