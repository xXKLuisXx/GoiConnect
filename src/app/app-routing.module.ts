import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Principal/Social/social-home/social-home.module').then( m => m.SocialHomePageModule)
  },
  {
    path: '',
    redirectTo: 'social-home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Auth/register-page/register-page.module').then( m => m.RegisterPagePageModule)
  },
  {
    path: 'social/home',
    loadChildren: () => import('./Pages/Social/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'social/market',
    loadChildren: () => import('./Pages/Social/market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'social/stories',
    loadChildren: () => import('./Pages/Social/stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'social/chat',
    loadChildren: () => import('./Pages/Social/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'social/profile',
    loadChildren: () => import('./Pages/Social/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profesional/home',
    loadChildren: () => import('./Pages/Profesional/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profesional/business',
    loadChildren: () => import('./Pages/Profesional/business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'profesional/stories',
    loadChildren: () => import('./Pages/Profesional/stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'profesional/chat',
    loadChildren: () => import('./Pages/Profesional/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'profesional/profile',
    loadChildren: () => import('./Pages/Profesional/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profesional-home',
    loadChildren: () => import('./Principal/Profesional/profesional-home/profesional-home.module').then( m => m.ProfesionalHomePageModule)
  },
  {
    path: 'social-home',
    loadChildren: () => import('./Principal/Social/social-home/social-home.module').then( m => m.SocialHomePageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./Pages/Social/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./Pages/Profesional/description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'createcamp',
    loadChildren: () => import('./Pages/Profesional/createcamp/createcamp.module').then( m => m.CreatecampPageModule)
  },
  {
    path: 'socialproyect',
    loadChildren: () => import('./Pages/Profesional/socialproyect/socialproyect.module').then( m => m.SocialproyectPageModule)
  },
  {
    path: 'entrepreneurproyect',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./Pages/Profesional/entrepreneurproyect/entrepreneurproyect.module').then( m => m.EntrepreneurproyectPageModule)
  },
  {
    path: 'register-file',
    loadChildren: () => import('./Auth/register-file/register-file.module').then( m => m.RegisterFilePageModule)
  },  {
    path: 'sell',
    loadChildren: () => import('./Pages/Social/sell/sell.module').then( m => m.SellPageModule)
  },
  {
    path: 'product-description',
    loadChildren: () => import('./Pages/Social/product-description/product-description.module').then( m => m.ProductDescriptionPageModule)
  },
  {
    path: 'menu-apps',
    loadChildren: () => import('./Pages/Social/menu-apps/menu-apps.module').then( m => m.MenuAppsPageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./Pages/Social/invite-friends/invite-friends.module').then( m => m.InviteFriendsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
