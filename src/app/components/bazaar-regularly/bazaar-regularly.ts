import { Component } from '@angular/core';

import { Header } from '../header/header';
import { Nav } from '../nav/nav';
import { Merchandise } from '../merchandise/merchandise';
import { Activities } from '../activities/activities';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-bazaar-regularly',
  imports: [Header, Nav, Merchandise, Activities, Footer],
  templateUrl: './bazaar-regularly.html',
  styleUrl: './bazaar-regularly.css',
}) 

export class BazaarRegularly {}


