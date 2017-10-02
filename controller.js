'use strict';

const app = angular
	.module( 'app', ['ngResource' ] )
	.config( [ '$locationProvider', function( $locationProvider ) {
		$locationProvider.html5Mode( true );
	} ] )
	.filter( 'datecustom', () => {
		return function( item ) {
			const dt2 = new Date().toISOString().slice( 0, 10 );
			const dt1 = item;
			const startDate = Date.parse( dt2 );
			const endDate = Date.parse( dt1 );
			const timeDiff = startDate - endDate;
			return  Math.floor( timeDiff / ( 1000 * 60 * 60 * 24 ) );
		};
	} );

