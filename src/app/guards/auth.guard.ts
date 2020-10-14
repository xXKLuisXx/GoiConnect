import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Utils } from '../Models/Classes/utils';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	private utils: Utils;
	constructor(
		private router: Router,
	) { 
		this.utils = new Utils();
	}
	async canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean | UrlTree> {

		if(this.utils.getItem('AccessDataUser') != null){

		}
		/*
		let promise = await new Promise((resolve, reject) => {
			this.nativeStorage.getItem('AccessDataUser').then(
				() => {
					resolve();
				},
				() => {
					reject();
				}
			);
		}).then(() => {
			return this.router.parseUrl('social');
		}).catch(() => {
			return true;
		});
		*/


		return promise;
	}
}
