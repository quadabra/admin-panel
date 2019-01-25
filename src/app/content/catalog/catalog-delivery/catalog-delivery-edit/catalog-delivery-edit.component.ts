import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-catalog-delivery-edit',
  templateUrl: './catalog-delivery-edit.component.html',
  styleUrls: ['./catalog-delivery-edit.component.css']
})
export class CatalogDeliveryEditComponent implements OnInit {
  deliveryForm: FormGroup;
  langs = ['Ru', 'En'];
  weightType: string;
  weightTypes = ['Regular', 'Volume'];
  ShowRestricted: string;
  ShowRestrictedItems = ['Yes', 'No'];
  displayedColumns = ['weight', 'cost'];
  zones = [
    {
      country_list: ['germany', 'france', 'italy'],
      prices: [
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        },
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        }
      ]
    },
    {
      country_list: ['usa', 'limpopo', 'kanada'],
      prices: [
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        }
      ]
    },
    {
      country_list: ['germany', 'france', 'italy'],
      prices: [
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        }
      ]
    },
    {
      country_list: ['germany', 'france', 'italy'],
      prices: [
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        }
      ]
    },
    {
      country_list: ['germany', 'france', 'italy'],
      prices: [
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        }
      ]
    },
    {
      country_list: ['germany', 'france', 'italy'],
      prices: [
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        }
      ]
    },
    {
      country_list: ['germany', 'france', 'italy'],
      prices: [
        {
          weight: 0.1,
          cost: 10
        },
        {
          weight: 0.2,
          cost: 20
        },
        {
          weight: 0.3,
          cost: 130
        },
        {
          weight: 0.41,
          cost: 140
        }
      ]
    }
  ];

  constructor(private fb: FormBuilder) {
    this.deliveryForm = this.fb.group({
      deliveryName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
