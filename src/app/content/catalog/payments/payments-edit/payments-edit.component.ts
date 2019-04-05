import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../../_api/language.service';
import {ILanguage} from '../../../../_model/interface/language';

@Component({
  selector: 'app-catalog-delivery-edit',
  templateUrl: './payments-edit.component.html',
  styleUrls: ['./payments-edit.component.css']
})
export class PaymentsEditComponent implements OnInit {
  productLanguage: ILanguage[];
  dataSource = [
    {
      name: 'Grey-shop.ru',
      discount: 5,
      isEnabled: false,
    },
    {
      name: 'Orion-spec.ru',
      discount: 0,
      isEnabled: true,
    },
  ];

  displayedColumns: string[] = ['shop', 'discount', 'status'];

  constructor(private langService: LanguageService) {
  }

  ngOnInit() {
    this.productLanguage = this.langService.getProductLangs();
  }

}
