import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	private userAuthenticated = false;

	constructor(
		private router: Router,
		private nativeStorage: NativeStorage,
	) { }
	async canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean | UrlTree> {
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


		return promise;
	}
}
