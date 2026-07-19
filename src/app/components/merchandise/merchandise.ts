import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MerchandiseService } from '../../services/merchandise.service'

@Component({
  selector: 'app-merchandise',
  imports: [AsyncPipe],
  templateUrl: './merchandise.html',
  styleUrl: './merchandise.css',
})
export class Merchandise {
    
    private merchandiseService = inject(MerchandiseService);

    merchandise$ = this.merchandiseService.getMerchandise();
}