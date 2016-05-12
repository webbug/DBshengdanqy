$(function(){
	
	$('#video').css({
		'width':$(window).width()+'px',
		'height':$(window).height()+'px'
	});
	
	var pingKuan=jQuery(window).width(),//m_wrapper是最外层div的类名
			bili = function(mun){
				var oScale = mun/750;	//750是psd宽度
				return oScale.toFixed(6);
			};
			

	bl('.com_btn',987,'','','');
	bl('.hint_btns',974,'','','');
	bl('.music_k','','',50,50);
	bl('.music_g','','',50,50);
	bl('.musicgai','','',100,100);
	bl('.text1',1012,'','','');
	bl('.text2',974,'','','');
	bl('.text3',1014,'','','');
	bl('.text4',1022,'','','');
	bl('.ksyx',970,'',348,108);
	bl('.pao1',282,36,401,258);
	bl('.pao2',161,374,358,258);
	bl('.yysj',993,27,342,156);
	bl('.fxqp',993,382,342,156);
	bl('.yyl',241,0,750,877);
	bl('.name',213,212,387,44);
	bl('.tel',343,212,387,44);
	bl('.s',478,212,212,44);
	bl('.si',478,456,175,44);
	bl('.yytj','','',610,164);
	bl('.com_bgp1',118,'',688,1060);
	bl('.l1_h',876,163,64,73);
	bl('.l1_l',876,163,64,73);
	bl('.l2_h',879,241,66,65);
	bl('.l2_l',879,241,66,65);
	bl('.l4_h',870,328,60,75);
	bl('.l4_l',872,328,60,75);
	bl('.l3_h',878,406,89,67);
	bl('.l3_l',878,406,89,67);
	bl('.pricej',118,'',690,1060);
	bl('.pri',180,'','','');
	
	
	
	
	
	
	
	
	 function bl(e,top,left,width,height){
			      
	      if(top!=''){
	      	jQuery(e).css({
				"top":pingKuan * bili(top)	
			});
	      }
	      
	      if(left!=''){
	      	jQuery(e).css({
				"left":pingKuan * bili(left)	
			});
	      }
	      
	      if(width!=''){
	      	jQuery(e).css({
				"width":pingKuan * bili(width)	
			});
	      }
	      
	      if(height!=''){
	      	jQuery(e).css({
				"height":pingKuan * bili(height)	
			});
	      }
			
			
			
	   }
	 
});

