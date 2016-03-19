$(function(){
	$('#fullpage').fullpage({ 
     afterLoad:function(link,index)
     {	if(index == 2){

			move('#motion-2-1')
			.x(0)
			.y(-500)
			.ease('linear')
			.delay('0s')
			.duration('0.5s')
			.end();

	     	move('#motion-2-2')
			.x(0)
			.y(400)
			.ease('linear')
			.delay('0s')
			.duration('0.5s')
			.end();
        }
        if(index==3){

        	move('#motion-5-1')
           .scale(1)
		   .ease('linear')
		   .duration('0.8s')
           .end();

           move('#motion-5-2')
           .scale(1)
		   .ease('linear')
		   .duration('0.8s')
           .end();
        }
        if(index==4){
        	move('#motion-6-1')
        	.delay('0s')
        	.y(-500)
        	.ease('linear')
        	.duration('0.8s')
        	.end();

        	move('#motion-6-2-1')
        	.delay('0s')
        	.y(400)
        	.ease('linear')
        	.duration('0.8s')
        	.end();

        	move('#motion-6-4')
        	.delay('0s')
        	.x(0)
        	.ease('linear')
        	.duration('0.8s')
        	.end();

        	move('#motion-6-5')
        	.delay('0s')
        	.scale(1)
        	.ease('linear')
        	.duration('0.8s')
            .end();
        }

     	
     },
     onLeave:function(index,dindex,direction){
     	if(index == 2){

			move('#motion-2-1')
			.x(0)
			.y(400)
			.ease('linear')
			.delay('0.5s')
			.duration('0.8s')
			.end();

	     	move('#motion-2-2')
			.x(0)
			.y(-400)
			.ease('linear')
			.delay('0.5s')
			.duration('0.8s')
			.end();

       }

        if(index==3){

        	move('#motion-5-1')
			.delay('0s')
           .scale(1.5)
           .end();

           move('#motion-5-2')
			.delay('0s')
           .scale(1.5)
           .end();
        }
        if(index==4){

        	move('#motion-6-1')
        	.delay('0s')
        	.y(800)
        	.ease('linear')
        	.delay('0.5s')
        	.duration('0.5s')
        	.end();

        	move('#motion-6-2-1')
        	.delay('0s')
        	.y(-600)
        	.ease('linear')
        	.delay('0.5s')
        	.duration('0.5s')
        	.end();

        	move('#motion-6-4')
        	.x(600)
        	.ease('linear')
        	.delay('0.5s')
        	.duration('0.5s')
        	.end();

        	move('#motion-6-5')
        	.delay('0.5s')
        	.scale(1.5)
        	.ease('linear')
        	.duration('0.5s')
        	.end();


        }



     }

		
        
     
	})
})








 /* anchors:['page-1','page-2','page-3','page-4','page-5','page-6','page-7'],
		afterLoad:function(link,index){
			switch(link){
				case 'page-1': pageyi=function(index){
					move('#motion-2-1')
					.add('margin-top',0)
					.end();
					move('#motion-2-2')
					.add('margin-bottom',0)
					.end();
				}();
				//case 'page-2':pageer(inden);
			}
		},
		onLeave:function(index,nextindex,direction){
			if(index!=2){
				$('#motion-2-1').css('margin-top',-434)
				$('#motion-2-2').css('margin-bottom',-200)
			}
			
		}
		




	   move(selector)
	   .set().add().sub()
	   .x().y().move().rotate().scale(1.2,1.2).skew()
	   .then().pop()   串起来要用then和pop
	   .ease('cubic-bezier(1,0,0,1)').duration('-1s')
	   .end()

	  sectionsColor:['pink','plum','purple','green'],
	   afterLoad:function(link,index){
	     if(index==2){
      
	      move('#move3')
	      .set('opacity',1)
	      .x(-200)
	      .end()



	      move('#move1').css({opacity:1});
	      .set('opacity',1)
	      .x(200)
	      .y(-100)
	      .duration('2s')
	      .then()
	      .ease('linear')
	      .x(-100)
	      .duration('3s')
	      .pop()
	      .end();
	     }
	   },
	   onLeave:function(index,dindex,direction){ 
	      if(index==2){
	      	move('#move4')
	      	.x(-200)
	      	.set('opacity',1)
	      	.end();
	      }
	   }

   
     先动前一个动画,再动第二个动画,中间放上then,设置完加上.pop(),
     move在第一屏加不上,布恩那个加动效

   	resize:true,
		scrollingSpeed:300,
		controlArrows:false,
		verticalCentered:false,
		anchors:['s1','s2','s3','s4'],  //加链接
		lockAnchors:true,//是否锁定锚链接
		easing:'linear',
		loopTop:true,
		navigation:true,//加上边上的轮播点
		scrollOverflow:true,//加上很多字就能出现滚动条
		paddingTop:0,

	*/
