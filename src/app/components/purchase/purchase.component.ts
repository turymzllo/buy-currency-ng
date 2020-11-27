import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service'
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  newPurchase: Purchase | undefined;

  purchaseForm = this.fb.group({
    userId: [null, Validators.required],
    isoCurrencyCode: [null, Validators.required],
    amountARGCurrency: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private purchaseService: PurchaseService
  ) {
  }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.purchaseService.post(this.purchaseForm.value).subscribe(p =>{
      this.newPurchase = p;      
    });
    this.purchaseForm.reset();
  }
}
