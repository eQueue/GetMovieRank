var xhr;

function enterkey() {
        if (window.event.keyCode == 13) {
 
             // 엔터키가 눌렸을 때 실행할 내용
             load();
        }
}

function load(){
	//alert('load run');
	var div=document.getElementById("result");
	var date=document.getElementById("date").value;
	
	
	xhr = new XMLHttpRequest();
	var url='https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=430156241533f1d058c603178cc3ca0e&targetDt='+date;
	//restAPI

div.innerHTML="....Loading....";
	
xhr.open('GET', url);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) 	{
        // alert('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);
		
		callback();


	
	}
};

xhr.send('');
	
	
	
	
}

function callback(){
	//alert('callback run');
	if(xhr.readyState==4){
		var xml=xhr.responseXML;
		
		
		var rank=xml.getElementsByTagName("rank");
		var moviename=xml.getElementsByTagName("movieNm");
		
		var result='';
		// var city=xml.getElementsByTagName("movieNm")[0].childNodes[0].nodeValue;
		//alert(city);
		var div=document.getElementById("result");
		// div.innerHTML=rank[0].childNodes[0].nodeValue+"위:"+'&nbsp&nbsp&nbsp'+city;
		
		for(var i=0;i<rank.length;i++){
			result=result+rank[i].childNodes[0].nodeValue+"위:"+"&nbsp&nbsp&nbsp"+moviename[i].childNodes[0].nodeValue+"<br/>"+"------------------------------<br/>";
		
		}
		div.innerHTML=result;
		
		
	}
				   



}