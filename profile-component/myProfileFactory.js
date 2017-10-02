'use strict';

function meProfileCtrl( DataService ) {
	const vm = this;
	vm.$onInit = function() {
		vm.likeclass = 'like icon-heart-empty';
		vm.follow = 'FOLLOW'; // In future get from api 
		vm.userdata = DataService.get();
		vm.custom = false;
	};
	/*  With API use $save(); forEach*/

	vm.following = function() {
		if ( vm.follow === 'FOLLOW' ) {
			vm.userdata.profile_view.fallowing++;
			vm.follow = 'FOLLOWED';
		} else {
			vm.userdata.profile_view.fallowing--;
			vm.follow = 'FOLLOW';
		}
	};
	vm.like = false; // In future get from api 
	vm.liking = function() {
		if ( !vm.like ) {
			vm.userdata.profile_view.likes++;
			vm.like = !vm.like;
			vm.likeclass = 'like icon-heart';
		} else {
			vm.userdata.profile_view.likes--;
			vm.like = !vm.like;
			vm.likeclass = 'like icon-heart-empty';
		}
	};
	vm.addComment = function() {
		const comment = {
			'user-id': vm.userdata.profile_view.id,
			'name': vm.userdata.me_view.name,
			'img': vm.userdata.me_view.img,
			'text': vm.text,
			'date': new Date().toISOString().slice( 0, 10 )
		};
		vm.userdata.profile_view.comments.push( comment );
        vm.text = '';
	};
	  // static
	vm.popUp = function() {
		vm.custom = vm.custom === false ? true : false;
	};
}
app.component( 'meprofile', {
	templateUrl: 'templates/alldata.html',
	controller: meProfileCtrl,
	bindings: {
		userdata: '<',
		likeclass: '<',
		follow: '<',
		text: '<',
		custom: '<'
	}
}
);
