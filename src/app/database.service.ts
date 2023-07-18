import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  public users: any = [
    {
      userid: '00001',
      email: 'example@gmail.com',
      password: 'exampleg1234',
    },
    {
      userid: '00002',
      email: 'example@yahoo.com',
      password: 'exampley1234',
    },
  ];

  public inventory: any = [
    {
      itemNo: 1,
      itemName: 'Item 1',
      itemUnit: 'Unit 1',
      itemQuantity: 10,
      itemPrice: 100.24,
    },
    {
      itemNo: 2,
      itemName: 'Item 10',
      itemUnit: 'Unit 2',
      itemQuantity: 10,
      itemPrice: 100.24,
    },
    {
      itemNo: 3,
      itemName: 'Item 2',
      itemUnit: 'Unit 3',
      itemQuantity: 10,
      itemPrice: 80.04,
    },
    {
      itemNo: 4,
      itemName: 'Item 3',
      itemUnit: 'Unit 4',
      itemQuantity: 110,
      itemPrice: 100.24,
    },
    {
      itemNo: 5,
      itemName: 'Item 4',
      itemUnit: 'Unit 5',
      itemQuantity: 10,
      itemPrice: 100.24,
    },
    {
      itemNo: 6,
      itemName: 'Item 5',
      itemUnit: 'Unit 6',
      itemQuantity: 10,
      itemPrice: 80.04,
    },
    {
      itemNo: 7,
      itemName: 'Item 6',
      itemUnit: 'Unit 7',
      itemQuantity: 110,
      itemPrice: 100.24,
    },
    {
      itemNo: 8,
      itemName: 'Item 7',
      itemUnit: 'Unit 8',
      itemQuantity: 10,
      itemPrice: 80.04,
    },
    {
      itemNo: 9,
      itemName: 'Item 8',
      itemUnit: 'Unit 9',
      itemQuantity: 110,
      itemPrice: 100.24,
    },
  ];

  constructor() {}
}
