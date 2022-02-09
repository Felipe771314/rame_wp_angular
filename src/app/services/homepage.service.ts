import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class HomepageService {
  getHomepageMainSlides() { }
  
  constructor(private http: HttpClient){}
  public getHomepage() {
    const url = `${environment.api}/wp-json/wp/v2/media`;

    let imgs: any = { desktop: [], mobile: [] };

    this.http.get(url).subscribe((data: any) => {
      data.desktop.image.map((img: any) => {
        imgs.desktop.push({
          url: `${environment.api}${img.url}`,
          alt: img.alternativeText,
        });
      });
      data.mobile.image.map((img: any) => {
        imgs.mobile.push({
          url: `${environment.api}${img.url}`,
          alt: img.alternativeText,
        });
      });
    });
    return imgs;
  }
}