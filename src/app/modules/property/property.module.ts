import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyRoutingModule  } from './property-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MapComponent } from './map/map.component';
import { MarketAnalysisComponent } from './components/market-analysis/market-analysis.component';
import { MatIconModule } from '@angular/material/icon';
import { SiteAcquisitionComponent } from './components/site-acquisition/site-acquisition.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { FinanceComponent } from './components/finance/finance.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { ConstructionComponent } from './components/construction/construction.component';
import { ConstructionCloseComponent } from './components/construction-close/construction-close.component';
import { LoanComponent } from './components/loan/loan.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { ViewMarketAnalysisComponent } from './components/view-market-analysis/view-market-analysis.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddPropertyComponent, MapComponent, MarketAnalysisComponent, SiteAcquisitionComponent, PlanningComponent, ApprovedComponent, FinanceComponent, MarketingComponent, ConstructionComponent, ConstructionCloseComponent, LoanComponent, ListPropertyComponent, ViewPropertyComponent, ViewMarketAnalysisComponent],
  imports: [
    CommonModule,
    MatCardModule,  
    RouterModule,
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    MatStepperModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PropertyModule { }
