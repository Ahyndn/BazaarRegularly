import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { CareersService } from '../../services/careers.service';

@Component({
  selector: 'app-careers2',
  imports: [AsyncPipe],
  templateUrl: './careers2.html',
  styleUrl: './careers2.css',
})
export class Careers2 {

  private careersService = inject(CareersService);

  careers$ = this.careersService.getCareers();

}