import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { HomeComponent } from '../home/home.component';

import { InventoryComponent } from '../inventory/inventory.component';

import { AddItemsComponent } from '../add-items/add-items.component';

import { DashboardComponent } from '../dashboard/dashboard.component';

import { HelpPageComponent } from '../help-page/help-page.component';

import { AboutComponent } from '../about/about.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [
    FolderPage,
    HomeComponent,
    InventoryComponent,
    AddItemsComponent,
    DashboardComponent,
    HelpPageComponent,
    AboutComponent,
  ],
})
export class FolderPageModule {}
