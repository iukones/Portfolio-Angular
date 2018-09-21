import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


const app_routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];




@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true} )
    ],
    exports: [
        RouterModule
    ]

})

export class appRoutingModule { }