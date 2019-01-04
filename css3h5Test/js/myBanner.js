;(function($,window,document,undefined){
	function myScrollBanner(_bannerEle,options){
	    var defaults={
	    bannerEle:_bannerEle,//绑定轮播图元素
		activeIdx:0,//当前播放图片下标
		length:0,//图片数
		x1:0,//滑动起点x坐标
		x2:0,//滑动终点x坐标
		timer:'',//自动播放timer
		autoplay:3000//自动播放间隔，0为不自动播放
	}
	this.opt=$.extend({}, defaults, options);
	console.log('opt:',this.opt);
	    this.init(_bannerEle);
	}
	myScrollBanner.prototype={
	    init:function(_bannerEle){
	        $('.banner-box').css({position: "relative",overflow: "hidden"})
	$('.banner-list').css({
	    position: "relative",width: "1000%",overflow: "hidden",listStyle: "none",
	    transition: "all 500ms",webkitTransition: "all 500ms"
	})
	$('.banner-li').css({width: "10%",float: "left",fontSize: "0",listStyle: "none"})
	$(".banner-li img").css({width: "100%"})
	var bannerWidth=$(_bannerEle).width();
	var $li=$(_bannerEle).find('.banner-li');
	var liLen=$li.length;
	$(_bannerEle).find('.banner-list').css({
	    width:bannerWidth*liLen
	})
	$li.css({
	    width:bannerWidth
	})
	this.opt.length=liLen;//轮播图片数
	    this.autoRun();
	    this._bindEvent();
	},
	autoRun:function(){
	    //自动播放
	var autoplay=this.opt.autoplay;
	var _this = this;
	_this.stopRun();
	if(autoplay>0){
	    _this.timer = setInterval(function () {
	        _this.toRun('next');
	        }, autoplay);
	    }
	},
	stopRun:function(){
	    //停止自动播放
	    if (this.timer) {
	        window.clearInterval(this.timer);
	    }
	},
	toRun:function(type){
	    //切换上下页
	var activeIdx=this.opt.activeIdx;
	var length=this.opt.length;
	var $banner=$(this.opt.bannerEle);
	if(type=='next'){
	    activeIdx=activeIdx<length-1?activeIdx+1:0;//下一页
	}else{
	    activeIdx=activeIdx>0?activeIdx-1:length-1;//上一页
	}
	$banner.find('.banner-list').css({
	        marginLeft:-activeIdx*$banner.width()
	    })
	    this.opt.activeIdx=activeIdx;
	},
	_bindEvent:function(){
	    //绑定事件
	var _this=this;
	_this.opt.bannerEle[0].addEventListener('touchstart',function(event){
	    try{
	    	_this.opt.x1 = event.changedTouches[0].pageX;
	    }catch(e){
	    	_this.opt.x1=100;
	    }
	})
	_this.opt.bannerEle[0].addEventListener('touchend',function(event){
	    try{
	    	_this.opt.x2 = event.changedTouches[0].pageX;
	    }catch(e){
	    }
	    console.log(_this.opt.x1,_this.opt.x2);
	    var touchX=_this.opt.x2-_this.opt.x1;
	    if(touchX>50){
	        _this.toRun('prev');//上一页
	        _this.autoRun();
	    }else if(touchX<-50){
	        _this.toRun('next');//下一页
	                    _this.autoRun();
	                }
	            })
	        }
	    }
	    $.fn.scrollBanner=function(options){
	        new myScrollBanner(this,options);
	    }
	}(jQuery,window,document))