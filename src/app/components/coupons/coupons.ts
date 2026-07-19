import { Component } from '@angular/core';

import { Header } from '../header/header';
import { Nav3 } from '../nav3/nav3';
import { Coupons2 } from '../coupons2/coupons2';
import { Activities } from '../activities/activities';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-coupons',
  imports: [Header, Nav3, Coupons2, Activities, Footer],
  templateUrl: './coupons.html',
  styleUrl: './coupons.css',
})
export class Coupons {}
