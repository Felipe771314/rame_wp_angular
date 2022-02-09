import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from "src/app/core/core.module";
import { PortfolioComponent } from '../portfolio/portfolio.component';
@NgModule({
  declarations: [HomeComponent, PortfolioComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CoreModule],
  providers: [],
})
export class HomeModule {}
