
$(function() {
	curtain();

	function curtain() {
		$('.main-img__curtain-left').animate({'left' : '0'});
		$('.main-img__curtain-right').animate({'right' : '0'},
			function(){
				mainTitle();
			});
	}
	function mainTitle() {
		$('.main-img__title').animate({'top' : '60px'}, 300)
		/*.animate({padding : '50px'}, 100)*/
		.animate({'top' : '45px'}, 200,
		function(){
				mainTitleLight();
			});
	}

	function mainTitleLight() {
		$('.main-img_title_light').delay(100).fadeIn('slow',function(){
				$(this).fadeOut('slow', function(){
				leaf()
			});	
		});
	}

	function leaf() {
		$('.main-img__leaf-left').animate({'left' : '50%'});
		$('.main-img__leaf-right').animate({'right' : '50%'});
		$('.main-img__ribbon').animate({'top' : '15',}, function(){
				kira()
				mainTitleLight();
		});
	}


	function kira() {	
		var kiras = $('.main-img__kira--1, .main-img__kira--2, .main-img__kira--3, .main-img__kira--4, .main-img__kira--5');
		kiras.each(function(i) {
			$(this).delay(100*i).fadeIn('slow');
		});

	}

});


/*
var d = new $.Deferred();

async(function() {
    console.log('async');
    d.resolve();
});

d.promise().then(function() {
    console.log('hoge');
});

/**指定した関数を 1 秒後に実行する
function async(f) {
    setTimeout(f, 1000);
}
*/