// jQuery Post Swipe Demo

psDemo = {
	postSwipe: function() {
		$( '.post' ).on( 'swipeleft', function() {
			if ( $( '.ui-btn-active' ).is( 'li:last-child' ) ) {
				$( '.ui-btn-active' ).removeClass( 'ui-btn-active' ).siblings().first().addClass( 'ui-btn-active' );
			} else {
				$( '.ui-btn-active' ).removeClass( 'ui-btn-active' ).next().addClass( 'ui-btn-active' );
			}
			psDemo.postAnimate( this, 'left' );
		});
		$( '.post' ).on( 'swiperight', function() {
			if ( $( '.ui-btn-active' ).is( 'li:first-child' ) ) {
				$( '.ui-btn-active' ).removeClass( 'ui-btn-active' ).siblings().last().addClass( 'ui-btn-active' );
			} else {
				$( '.ui-btn-active' ).removeClass( 'ui-btn-active' ).prev().addClass( 'ui-btn-active' );
			}
			psDemo.postAnimate( this, 'right' );
		});
	},
	postAnimate: function( post, dir ) {
		if (dir == 'left') {
			dir1 = 'translate3dOutLeft';
			dir2 = 'translate3dOutRight';
		} else {
			dir1 = 'translate3dOutRight';
			dir2 = 'translate3dOutLeft';
		}
		$( post ).clearQueue();
		$( '.post' ).queue( function( next ) {
			$( post ).removeClass( 'translate3dIn' ).addClass( 'animate ' + dir1 );
			next();
		}).delay( 350 ).queue( function( next ) {
			var articleNum = $( '.ui-btn-active' ).index() + 1;
			$( '.post h1' ).text( 'Article ' + articleNum );
			$( post ).removeClass( 'animate ' + dir1 ).addClass( dir2 );
			next();
		}).delay( 100 ).queue( function( next ) {
			$( post ).removeClass( dir2 ).addClass( 'animate translate3dIn' );
		});
	}
};

$( document ).ready( function() {
	psDemo.postSwipe();
});