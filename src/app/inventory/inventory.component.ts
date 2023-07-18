import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  items: any = this.database.inventory;
  isModalOpen = false;
  editableItem: any = {};

  constructor(
    private database: DatabaseService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.items = [];

    for (const item of this.database.inventory) {
      const itemString = JSON.stringify(item).toLowerCase();
      if (itemString.includes(searchTerm)) {
        this.items.push(item);
      }
    }
  }

  setOpen(isOpen: boolean, item: any) {
    this.isModalOpen = isOpen;
    if (item == null) {
      this.editableItem = [];
    } else {
      this.editableItem = item;
    }
  }

  editItem() {
    const input = document.querySelector('ion-input')?.value;
    if (input != null) {
      //loop through inventory and find the item with same nube
      for (let i = 0; i < this.database.inventory.length; i++) {
        //itemNo in the editableItem is the same as the itemNo in the inventory
        if (this.editableItem.itemNo === this.database.inventory[i].itemNo) {
          //change the itemNo in the inventory to the new itemNo
          this.database.inventory[i].itemNo = input;
          //close the modal
          this.setOpen(false, null);
        }
      }
    }
  }

  handlerMessage = '';
  roleMessage = '';

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.submitUpdate();
      },
    },
  ];
  public alertButtons2 = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.submitDelete();
      },
    },
  ];
  setResult(ev: any) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }

  submitUpdate() {
    for (let i = 0; i < this.database.inventory.length; i++) {
      if (this.editableItem.itemNo === this.database.inventory[i].itemNo) {
        this.database.inventory[i] = this.editableItem;
        this.setOpen(false, null);
      }
    }
    this.items = this.database.inventory;
  }

  submitDelete() {
    for (let i = 0; i < this.database.inventory.length; i++) {
      if (this.editableItem.itemNo === this.database.inventory[i].itemNo) {
        this.database.inventory.splice(i, 1);
        this.setOpen(false, null);
      }
    }
    this.items = this.database.inventory;
  }

  deleteItem(item: any) {
    this.editableItem = item;
    this.alertController
      .create({
        header: 'Delete Item',
        message: 'Are you sure you want to delete this item?',
        buttons: this.alertButtons2,
      })
      .then((res) => {
        res.present();
      });
    this.items = this.database.inventory;
  }
  ngOnInit() {}
}
