import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Utils } from '../Models/Classes/utils';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private utils: Utils,
	) { }
	async canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean | UrlTree> {
		let promise = await this.utils.getAccessData().then((data) => {
			console.log(data);
			return this.router.parseUrl('social');
		}).catch((error) => {
			console.log(error)
			return true;
		});

		return promise;
	}
}
