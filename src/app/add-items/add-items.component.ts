import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss'],
})
export class AddItemsComponent implements OnInit {
  itemNo: number = 0;
  itemName: string = '';
  itemUnit: string = '';
  itemQuantity: number = 0;
  itemPrice: number = 0;
  itemTotal: number = this.itemQuantity * this.itemPrice;

  constructor(
    private alertController: AlertController,
    private database: DatabaseService
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you want to submit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Submit',
          handler: () => {
            this.submitUpload();
          },
        },
      ],
    });

    await alert.present();
  }

  submitUpload() {
    this.database.inventory.push({
      itemNo: this.itemNo,
      itemName: this.itemName,
      itemUnit: this.itemUnit,
      itemPrice: this.itemPrice,
      itemQuantity: this.itemQuantity,
    });

    this.itemNo = 0;
    this.itemName = '';
    this.itemUnit = '';
    this.itemQuantity = 0;
    this.itemPrice = 0;
    this.itemTotal = 0;
  }

  updateTotal() {
    this.itemTotal = this.itemQuantity * this.itemPrice;
  }

  ngOnInit() {}
}
