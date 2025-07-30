import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { Services } from './services/services';

export const routes: Routes = [
    {path:'',component:Hero},
    {path:'services',component:Services}
];
