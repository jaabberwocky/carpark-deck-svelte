import type { Carpark } from '$lib/types/carpark.type'
import type {Parked } from '$lib/types/parked.type'
import { writable } from 'svelte/store'
import type {Writable} from 'svelte/store'

export const carpark: Writable<Carpark> = writable({
	decks: []
});

export const parked: Writable<Parked> = writable({
	deck: ""
})
