import { Component, OnInit } from '@angular/core';
import { CurrentQuote } from 'src/app/models/current-quote';
import { QuoteService } from '../../services/quote.service'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  usd: CurrentQuote;
  brl: CurrentQuote;

  constructor(
    private quoteService: QuoteService
  ) {
    this.usd = {
      id: "USD",
      sale: 0,
      buy: 0,
      updated: "Hit Refresh"
    };
    
    this.brl = {
      id: "BRL",
      sale: 0,
      buy: 0,
      updated: "Hit Refresh"
    };
  }

  ngOnInit(): void {
    this.getQuote("USD");
    this.getQuote("BRL");
  }

  getQuote(isoCode: string): void {
    if (isoCode === "USD") {
      this.quoteService.getQuote(isoCode).subscribe(quote => this.usd = quote);
    }
    else if (isoCode === "BRL") {
      this.quoteService.getQuote(isoCode).subscribe(quote => this.brl = quote);
    }
  }

  onRefresh(isoCode: string): void {
    this.getQuote(isoCode);
  }

}
