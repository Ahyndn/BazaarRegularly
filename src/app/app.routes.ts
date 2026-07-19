import { Routes } from '@angular/router';

import { BazaarRegularly } from './components/bazaar-regularly/bazaar-regularly';
import { Carryall } from './components/carryall/carryall';
import { Coupons } from './components/coupons/coupons';
import { Careers } from './components/careers/careers'; 

export const routes: Routes = [
    {
        path: '',
        component: BazaarRegularly,
        title: 'Bazaar Regularly'
    },
    {
        path: 'Carryall',
        component: Carryall,
        title: 'Carryall'
    },
    {
        path: 'Coupons',
        component: Coupons,
        title: 'Coupons'
    },
    {
        path: 'Careers',
        component: Careers,
        title: 'Careers'
    }
];
