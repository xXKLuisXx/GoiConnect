import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./Auth/home/home.module').then( m => m.HomePageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		loadChildren: () => import('./Auth/login-page/login-page.module').then(m => m.LoginPagePageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'register',
		loadChildren: () => import('./Auth/register-page/register-page.module').then(m => m.RegisterPagePageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'profesional',
		//loadChildren: () => import('./Principal/Profesional/profesional-home/profesional-home.module').then(m => m.ProfesionalHomePageModule)
		children: [
			{
				path: '',
				loadChildren: () => import('./Principal/Profesional/profesional-home/profesional-home.module').then(m => m.ProfesionalHomePageModule)
				//canActivate:[ProtectGuard],
			},
			{
				path: 'profesional-home',
				loadChildren: () => import('./Pages/Profesional/home/home.module').then(m => m.HomePageModule)
			},
			{
				path: 'profesional-business',
				loadChildren: () => import('./Pages/Profesional/business/business.module').then(m => m.BusinessPageModule)
			},
			{
				path: 'profesional-stories',
				loadChildren: () => import('./Pages/Profesional/stories/stories.module').then(m => m.StoriesPageModule)
			},
			{
				path: 'profesional-chat',
				loadChildren: () => import('./Pages/Profesional/chat/chat.module').then(m => m.ChatPageModule)
			},
			{
				path: 'profesional-profile',
				loadChildren: () => import('./Pages/Profesional/profile/profile.module').then(m => m.ProfilePageModule)
			},
		]
	},
	{
		path: 'social',
		//loadChildren: () => import('./Principal/Social/social-home/social-home.module').then(m => m.SocialHomePageModule),
		children: [
			{
				path: '',
				loadChildren: () => import('./Principal/Social/social-home/social-home.module').then(m => m.SocialHomePageModule),
			},
			{
				path: '',
				loadChildren: () => import('./Pages/Social/home/home.module').then(m => m.HomePageModule),
			},
			{
				path: '',
				loadChildren: () => import('./Pages/Social/market/market.module').then(m => m.MarketPageModule)
			},
			{
				path: 'social-stories',
				loadChildren: () => import('./Pages/Social/stories/stories.module').then(m => m.StoriesPageModule)
			},
			{
				path: 'social-profile',
				loadChildren: () => import('./Pages/Social/profile/profile.module').then(m => m.ProfilePageModule)
			},
			{
				path: 'social-publication',
				loadChildren: () => import('./Pages/Social/publication/publication.module').then(m => m.PublicationPageModule),
			},
			{
				path: 'social-chat',
				loadChildren: () => import('./Pages/Social/chat/chat.module').then(m => m.ChatPageModule)
			},
			{
				path: 'lodging',
				loadChildren: () => import('./Pages/Social/lodging/lodging.module').then( m => m.LodgingPageModule)
			},
			{
				path: 'friendship',
				loadChildren: () => import('./Pages/Social/friendship/friendship.module').then( m => m.FriendshipPageModule)
			},
		]
	},
  {
    path: 'profile',
    loadChildren: () => import('./Auth/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
	path: 'allfriends',
	loadChildren: () => import('./Pages/Social/allfriends/allfriends.module').then( m => m.AllfriendsPageModule)
  },

  /*
	
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
	
	*/


];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
