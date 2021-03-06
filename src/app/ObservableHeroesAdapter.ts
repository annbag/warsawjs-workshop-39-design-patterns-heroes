import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { CrimeFighter } from './CrimeFighter';

@Injectable({
  providedIn: 'root',
})

export class ObservableHeroesAdapter {

	convertHeroes(crimeFighters: CrimeFighter[]): Observable<Hero[]> {
		if (crimeFighters == null) {
			// do something
		}
		let heroes: Hero[] = [];
		for (let crimeFighter of crimeFighters) {
			if (crimeFighter instanceof Hero) {
				heroes.push(crimeFighter as Hero);
			}
		}

		return of(heroes);
	}
}
