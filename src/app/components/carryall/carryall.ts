import { Component } from '@angular/core';

import { Header } from '../header/header';
import { Nav2 } from '../nav2/nav2';
import { Carryall2 } from '../carryall2/carryall2';
import { Activities } from '../activities/activities';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-carryall',
  imports: [Header, Nav2, Carryall2, Activities, Footer],
  templateUrl: './carryall.html',
  styleUrl: './carryall.css',
})
export class Carryall {}
