'use strict';

app.factory( 'DataService', ( $resource ) => {
	return $resource( 'test-view.json', {
		update: {
			method: 'PUT'
		}
	} );
} );
