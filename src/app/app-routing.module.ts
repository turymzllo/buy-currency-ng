import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  {path: '',component: QuotesComponent},
  {path: 'quote',component: QuotesComponent},
  {path: 'purchase',component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
