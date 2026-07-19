import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MerchandiseService } from '../../services/merchandise.service'

@Component({
  selector: 'app-carryall2',
  imports: [AsyncPipe],
  templateUrl: './carryall2.html',
  styleUrl: './carryall2.css',
})
export class Carryall2 {

   private merchandiseService = inject(MerchandiseService);

    merchandise$ = this.merchandiseService.getMerchandise();
}
