import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {ThemeService} from './theme';

// import {CLogger} from '@cvsdigital_ui/ui-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private themeService: ThemeService, private elementRef: ElementRef) {

  }

  ndcId = '';
  tokenId = '';
  ndcList = '';
  showDpp = false;
  theme = 'light';

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('custom-button')
      .addEventListener('action', this.onClick.bind(this));
  }

  updateDpp() {
    this.ndcList = this.ndcId + ',' + this.ndcList;
    console.log('Token ID' + this.tokenId);
    console.log('NDC List' + this.ndcList);
    this.showDpp = true;
  }

  openModal() {
    const modal: any = document.querySelector('cvs-modal');
    modal.open();
  }

  toggleHandler(event: CustomEvent) {
    this.theme = event.detail ? 'dark' : 'light';
  }

  onClick(data) {
    alert(data.detail);
  }
}
