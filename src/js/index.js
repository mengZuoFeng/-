// alert(2);
var mySwiper = new Swiper('.swiper-container', {
	autoplay:true,
	loop: true, // 循环模式选项
	effect:'fade',
	
	// 如果需要分页器
	pagination: {
	  el: '.swiper-pagination',
	},
	
	// 如果需要前进后退按钮
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	
	// 如果需要滚动条
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },

	fadeEffect:{
		crossFade:true,
	}

  })   




//需求分析:在文本框输入内容,根据输入的内容,请求接口,参数将根据内容不同而不同,得到的数据渲染在ul里面

var input =document.querySelector('.txt');
var ul=document.querySelector('.ul')
var sub=document.querySelector('.sub')

var flag = true;//判断用户是否输入完成,默认是完成的
		input.addEventListener('compositionstart',function(){
			flag = false;
		})
		input.addEventListener('compositionend',function(){
			flag = true;
		})
		input.oninput = function(e){


			var e = e||event; 
			var target = e.target||e.srcElement;
			e.stopPropagation();


			setTimeout(function(){
				if(flag){

					var keyword = input.value;//输入的关键字


					// //方法一
					// //创建script标签
					// var script = document.createElement('script');
					// //定义一个函数名
					// var cbName = 'phone'+new Date().getTime()+Math.random().toString().slice(2);	
					// //设置该标签的src属性
					// script.src = "https://suggest.taobao.com/sug?code=utf-8&q="+keyword+"&_ksTS=1563970517892_385&callback="+cbName+"&k=1&area=c2c&bucketid=10";								
					// //定义一个函数,以备调用
					// window[cbName] = function(data){
					// 	var result = data.result;//是一个数组
					// 	var str = "";
					// 	result.forEach(function(value){
					// 		str+="<li>"+value[0]+"</li>"
					// 	})
					// 	ul.innerHTML = str;
					// 	script.remove()
					// }
					// document.body.appendChild(script);


					//方法二
					ajax({
						dataType:'jsonp',
						url:'https://suggest.taobao.com/sug',
						data:{
							code:"utf-8",
							q:keyword,
							_ksTS:"1563970517892_385",
							k:1,
							area:"c2c",
							bucketid:10

						},
						success:function(data){
							var result = data.result;//是一个数组
							var str = "";
							result.forEach(function(value){
								str+="<li>"+value[0]+"</li>"
							})
							ul.innerHTML = str;
						}
					})
				}
			},0)
		}

		sub.onclick = function(){
			ul.style.display = "none";
		}
		








var a =document.querySelectorAll('.footer_links ul li a')
console.log(a)

for(var i=0;i<a.length;i++){
	a[i].onmouseenter=function(){
		
		animate(this,{'paddingLeft':10})
	}
	a[i].onmouseleave=function(){
		
	   animate(this,{'paddingLeft':0})
   }
}






//左侧固定

var zuo=document.querySelector('.home_nav_bar')

window.onscroll=function(){
	
	 if(window.pageYOffset>620){
		// console.log(window.pageYOffset)
		zuo.style.display='block'
		}else{
			zuo.style.display='none'
		}
}























