import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MerchandiseService } from '../../services/merchandise.service'

@Component({
  selector: 'app-coupons2',
  imports: [AsyncPipe],
  templateUrl: './coupons2.html',
  styleUrl: './coupons2.css',
})
export class Coupons2 {
    
    private merchandiseService = inject(MerchandiseService);

    merchandise$ = this.merchandiseService.getMerchandise();
}
