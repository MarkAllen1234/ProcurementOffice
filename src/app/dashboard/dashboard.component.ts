import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  quantity: number = 0;
  costs: number = 0;
  item: number = 0;
  max: number = 0;
  min: number = Number.MAX_VALUE; // Initialize min with a large value

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.computeValues();
  }

  computeValues() {
    this.quantity = 0;
    this.costs = 0;
    this.item = 0;
    this.max = 0;

    for (let item of this.databaseService.inventory) {
      this.max = Math.max(this.max, item.itemPrice);
      if (item.itemPrice > 0) {
        this.min = Math.min(this.min, item.itemPrice);
      }
      this.item += 1;
      this.quantity += parseFloat(item.itemQuantity);
      this.costs += parseFloat(item.itemPrice) * parseFloat(item.itemQuantity);
    }
  }
}
