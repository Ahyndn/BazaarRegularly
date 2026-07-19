import { Component } from '@angular/core';

import { Header } from '../header/header';
import { Nav4 } from '../nav4/nav4';
import { Careers2 } from '../careers2/careers2';
import { Activities } from '../activities/activities';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-careers',
  imports: [Header, Nav4, Careers2, Activities, Footer],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {}
