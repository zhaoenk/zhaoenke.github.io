
function ShowTime(){
	var NowDate=new Date();
	var h=NowDate.getHours();
	var m=NowDate.getMinutes();
	var s=NowDate.getSeconds();
　	if(h<10 && m<10 && s<10)
		document.getElementById('showbox').innerHTML = '0'+h+':'+'0'+m+':'+'0'+s+'';
	else if(h<10 && s<10)
		document.getElementById('showbox').innerHTML = '0'+h+':'+m+':'+'0'+s+'';
	else if(h<10 && m<10)
		document.getElementById('showbox').innerHTML = '0'+h+':'+'0'+m+':'+s+'';
	else if(m<10 && s<10)
		document.getElementById('showbox').innerHTML = h+':'+'0'+m+':'+'0'+s+'';
	else if(h<10)
		document.getElementById('showbox').innerHTML = '0'+h+':'+m+':'+s+'';
	else if(m<10)
		document.getElementById('showbox').innerHTML = h+':'+'0'+m+':'+s+'';
	else if(s<10)
		document.getElementById('showbox').innerHTML = h+':'+m+':'+'0'+s+'';
	else
		document.getElementById('showbox').innerHTML = h+':'+m+':'+s+'';
　setTimeout('ShowTime()',1000);
}

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/*踩油門*/
number = 1;
todown = 0;
function stopandgo(){
	stop=1;
}
function velocityplus(){
	/*起始頭燈判斷*/
	green();
	red();
	/*plus*/
	var inner = document.getElementById("velocity1");
	var inner1= document.getElementById("velocity2");
	brakes=0;
	stop=0;
	set = setInterval(function(){
		if(stop==0){
			number++;
			inner.innerHTML = number;
			inner1.innerHTML = number*50+500;
			red();
		}
		else{
			stop=0;
			if(todown==1) clearInterval(set1);
			velocitydowndown();
			todown=1;
			clearInterval(set);
		}
	},100);
}
/*踩煞車*/
function goandstop(){
	stop=0;
}
function velocitydown(){
	/*起始頭燈判斷*/
	green();
	red();
	/*down*/
	var inner = document.getElementById("velocity1");
	var inner1= document.getElementById("velocity2");
	brakes=0;
	stop=1;
	set = setInterval(function(){
		if(stop==1){
			if(number==0) {}
			else{
				number--;
				inner.innerHTML = number;
				inner1.innerHTML = number*50+500;
				green();
			}
		}
		else{
			stop=1;
			clearInterval(set1);
			velocitydowndown();
			clearInterval(set);
		}
	},100);
}
function velocitydowndown(){
	var inner = document.getElementById("velocity1");
	var inner1= document.getElementById("velocity2");
	brakes=1;
	set1 = setInterval(function(){
		if(brakes==1){
			if(number==0) {
				brakes=0;
			}
			else{
				number--;
				inner.innerHTML = number;
				inner1.innerHTML = number*50+500;
				green();
			}
		}
		else{
			clearInterval(set1);
		}
	},1000);
}

function CancelEvent(e) {
  e.preventDefault();
}
//////////////////////////////////////////////////////////

/*頭燈*/
li=0;
function light(){
	le=0;
	ri=0;
	if(li==0){
		if(number<=10){
			document.getElementById('table1').style.boxShadow = "0 0 90px rgba(0, 0, 255, 100)";
		}
		else if(number>10){
			document.getElementById('table1').style.boxShadow = "0 0 90px rgba(255, 0, 0, 100)";
		}
		else {}
		li=1;
	}
	else{
		document.getElementById('table1').style.boxShadow = "none";
		li=0;
	}
}

ri=0;
function right(){
	if(li==1 && number<10 && ri==0){
		document.getElementById('table1').style.boxShadow = "90px 0 90px -90px rgba(0, 0, 255, 100)";
		ri=1;
		le=0;
	}
	else if(li==1 && number>=10 && ri==0){
		document.getElementById('table1').style.boxShadow = "90px 0 90px -90px rgba(255, 0, 0, 100)";
		ri=1;
		le=0;
	}
	else if(li==1 && number<10 && ri==1){
		document.getElementById('table1').style.boxShadow = "0 0 90px rgba(0, 0, 255, 100)";
		ri=0;
	}
	else if(li==1 && number<10 && ri==1){
		document.getElementById('table1').style.boxShadow = "0 0 90px rgba(255, 0, 0, 100)";
		ri=0;
	}
	else ;
} 

le=0;
function left(){
	if(li==1 && number<10 && le==0){
		document.getElementById('table1').style.boxShadow = "-90px 0 90px -90px rgba(0, 0, 255, 100)";
		le=1;
		ri=0;
	}
	else if(li==1 && number>=10 && le==0){
		document.getElementById('table1').style.boxShadow = "-90px 0 90px -90px rgba(255, 0, 0, 100)";
		le=1;
		ri=0;
	}
	else if(li==1 && number<10 && le==1){
		document.getElementById('table1').style.boxShadow = "0 0 90px rgba(0, 0, 255, 100)";
		le=0;
	}
	else if(li==1 && number>=10 && le==1){
		document.getElementById('table1').style.boxShadow = "0 0 90px rgba(255, 0, 0, 100)";
		le=0;
	}
	else ;
}

/*頭燈變綠*/
function green(){
	if(li==1 && number <=10 && ri==0 && le==0){
		document.getElementById('table1').style.boxShadow = "0 0 90px rgba(0, 0, 255, 100)";
	}
	else if(li==1 && number <=10 && ri==1 && le==0){
		document.getElementById('table1').style.boxShadow = "90px 0 90px -90px rgba(0, 0, 255, 100)";
	}
	else if(li==1 && number <=10 && ri==0 && le==1){
		document.getElementById('table1').style.boxShadow = "-90px 0 90px -90px rgba(0, 0, 255, 100)";
	}
	else {}
}

/*頭燈變紅*/
function red(){
	if(li==1 && number >10 && ri==0 && le==0){
		document.getElementById('table1').style.boxShadow = "0 0 90px rgba(255, 0, 0, 100)";
	}
	else if(li==1 && number >10 && ri==1 && le==0){
		document.getElementById('table1').style.boxShadow = "90px 0 90px -90px rgba(255, 0, 0, 100)";
	}
	else if(li==1 && number >10 && ri==0 && le==1){
		document.getElementById('table1').style.boxShadow = "-90px 0 90px -90px rgba(255, 0, 0, 100)";
	}
	else {}
}

/*地圖*/
function myMap() {
var mapProp = {
    center:new google.maps.Taipei(120.250000,23.330000),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/*選單*/
mo=0;
function mode(){
	if(mo==0){
		document.getElementById("change1").className = "weather";
		document.getElementById("change2").className = "weatherNow";
		document.getElementById("change3").className = "weatherWeek";
		document.getElementById("CName").style.visibility="visible";
		mo=1;
	}
	else if(mo==1){
		document.getElementById("change1").className = "picture1";
		document.getElementById("change2").className = "m1";
		document.getElementById("change3").className = "m1";
		document.getElementById("CName").style.visibility="hidden";
		mo=2;
	}
	else if(mo==2){
		document.getElementById("change1").className = "m1";
		mo=0;
	}
	else ;
}