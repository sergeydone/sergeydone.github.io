//--- определяем отображение включенных по умолчанию расчитываемых ресурсов при загрузке страницы
nodeStartupOnOff = document.getElementsByClassName("calcmypay-on-off");
var nodeStartupLengthOnOff = nodeStartupOnOff.length; // количество элементов в которых определены поля ввода 
console.log('nodeStartupLengthOnOff ='+nodeStartupLengthOnOff);
// цикл по основным элементам открытым для изменеия
for (var k=0; k<nodeStartupLengthOnOff; k++){
//for (var l=0; l<4; l++){ //цикл по подчиненным элементам с полями ввода
	console.log('k='+k)	;
	node1StartupOnOff=nodeStartupOnOff[k];

	//console.log(target.children[1].firstElementChild.value);
	var elementStartupIdOnOff =  node1StartupOnOff.children[0].firstElementChild.id;
	var elementStartupCheckedOnOff =  node1StartupOnOff.children[0].firstElementChild.checked;
	console.log('id='+elementStartupIdOnOff);
	console.log('checked='+elementStartupCheckedOnOff);
	//var secondOnOff = target.parentNode.children[3].children[1].firstElementChild.value;
	//console.log('second='+second);
	calcmypayResourceOnOffOnStartup(elementStartupIdOnOff,elementStartupCheckedOnOff);	// конец обработчика событий, конец цикла по подчиненным рлдям ввода измеряемого параметра
	};//};
//---^


//--- определяем обработчики ручных включателей расчитываемых ресурсов
nodeOnOff = document.getElementsByClassName("calcmypay-on-off");
var nodeLengthOnOff = nodeOnOff.length; // количество элементов в которых определены поля ввода 
console.log('nodeLengthOnOff ='+nodeLengthOnOff);
// цикл по основным элементам открытым для изменеия
for (var k=0; k<nodeLengthOnOff; k++){
//for (var l=0; l<4; l++){ //цикл по подчиненным элементам с полями ввода
	//node1OnOff=nodeOnOff[k].children[l];	
	//node1=node[0].children[j];	
	node1OnOff=nodeOnOff[k].children[0];
	//node2=node[0].children[3];
	node1OnOff.onclick = function(event){ // начало обработчика событий поля ввода
		var target = event.target; 
    			while (target != this) {
    				if (target.tagName == 'input') {
      				// нашли интересующий элемент?
      						}
    						target = target.parentNode;}
    						//target= target.parentNode;
	console.log('parentOnOff='+target.className);
	console.log(target.firstElementChild.className);
	console.log(target.children[0].className);
	//console.log(target.children[1].firstElementChild.value);
	var elementIdOnOff =  target.parentNode.children[0].children[0].firstElementChild.id;
	var elementCheckedOnOff =  target.parentNode.children[0].children[0].firstElementChild.checked;
	console.log('id='+elementIdOnOff);
	console.log('checked='+elementCheckedOnOff);
	//var secondOnOff = target.parentNode.children[3].children[1].firstElementChild.value;
	//console.log('second='+second);
	calcmypayResourceOnOff.showHide(elementIdOnOff,elementCheckedOnOff);// конец обработчика событий, конец цикла по подчиненным рлдям ввода измеряемого параметра
};};//};
//---^

//--- определяем обработчики ввода показаний
node = document.getElementsByClassName("calcmypay-input-row");
var nodeLength = node.length; // количество элементов в которых определены поля ввода 
//console.log(nodeLength);
// цикл по основным элементам открытым для изменеия
for (var i=0; i<nodeLength; i++){
for (var j=2; j<6; j++){ //цикл по подчиненным элементам с полями ввода
	node1=node[i].children[j];	
	//node1=node[0].children[j];	
	//node1=node[0].children[3];
	//node2=node[0].children[3];
	node1.onchange = function(event){ // начало обработчика событий поля ввода
		var target = event.target; 
    			while (target != this) {
    				if (target.tagName == 'input') {
      				// нашли интересующий элемент?
      						}
    						target = target.parentNode;}
	//console.log('parent='+target.className);
	//console.log(target.firstElementChild.className);
	//console.log(target.children[1].className);
	//console.log(target.children[1].firstElementChild.value);
	var first =  target.parentNode.children[2].children[1].firstElementChild.value;
	var firstAfterCheck = checkAndCorrectNumber(first);
	//console.log('first='+first);
	var second = target.parentNode.children[3].children[1].firstElementChild.value;
	//console.log('second='+second);
	var secondAfterCheck = checkAndCorrectNumber(second);
	console.log('second1 == == == == == == == == = == == == = == == == = == == == ='+secondAfterCheck);
	target.parentNode.children[2].children[1].firstElementChild.value= firstAfterCheck;
	target.parentNode.children[3].children[1].firstElementChild.value= secondAfterCheck;
	var temporaryVariableDifference = calcmypayResource.subtraction(firstAfterCheck,secondAfterCheck);
	target.parentNode.children[4].lastElementChild.innerHTML=temporaryVariableDifference;
	var temporaryVariableTariff = target.parentNode.children[1].children[1].textContent;
	temporaryVariableTariff = parseFloat(temporaryVariableTariff);
	console.log('temporaryVariableTariff2='+temporaryVariableTariff);
	var temporaryVariableCalculation = temporaryVariableDifference * temporaryVariableTariff;
	console.log(temporaryVariableCalculation);
	target.parentNode.children[5].lastElementChild.innerHTML=okrugl(temporaryVariableCalculation, 2);

	var testVar = calcmypayResourceSummary();

	};};// конец обработчика событий, конец цикла по подчиненным рлдям ввода измеряемого параметра
};
//---^

	
//--- объект определяющий энергоресурс - элемент расчета
var calcmypayResource = {
		name1: "",
		name2: "",
		/*funk3: function(name1,name2) {
			if (!name1) name1=0;
			if (!name2) name2=0;
			var tv0 = 10; // tarif
			var tv1 = name1;
			var tv2 = name2;
			var tv3 = tv2-tv1;
			return tv3;
			//console.log(okrugl((okrugl(tv2,2)-okrugl(tv1,2)),2));
		},*/
		subtraction: function(name1,name2) {
			if (!name1) name1=0;
			if (!name2) name2=0;
			var tv1 = name1;
			var tv2 = name2;
			var tv3 = tv2-tv1;
			return okrugl(tv3,4);
			//console.log(okrugl((okrugl(tv2,2)-okrugl(tv1,2)),2));
		}
	}
//---^



//--- объект определяющий энергоресурс - элемент переключения
var calcmypayResourceOnOff = {
		name1: "",
		name2: "",
		/*funk3: function(name1,name2) {
			var elementIdOnOffInWork=''+name1+'-show-hide';
			var elementShowHideOnOffInWork=''+name2;
			console.log('success call function, elementIdOnOffInWork='+elementIdOnOffInWork+' elementShowHideOnOffInWork='+elementShowHideOnOffInWork);
			console.log('elementShowHideOnOffInWork = '+elementShowHideOnOffInWork);
			if(elementShowHideOnOffInWork=='false') {console.log('checked = '+ elementShowHideOnOffInWork); $('#'+elementIdOnOffInWork).show();};
			if(elementShowHideOnOffInWork=='true') {console.log('checked = '+ elementShowHideOnOffInWork); $('#'+elementIdOnOffInWork).hide();};
			var tempVariable = calcmypayResourceSummary();
			return 1;
		},
		funk4: function(name1,name2) {
			var elementIdOnOffInWork11=''+name1+'-show-hide';
			var elementShowHideOnOffInWork11=''+name2;
			console.log('success call function, elementIdOnOffInWork='+elementIdOnOffInWork11+' elementShowHideOnOffInWork='+elementShowHideOnOffInWork11);
			console.log('elementShowHideOnOffInWork = '+elementShowHideOnOffInWork11);
			if(elementShowHideOnOffInWork11=='false') {console.log('checked = '+ elementShowHideOnOffInWork11); $('#'+elementIdOnOffInWork11).show();};
			if(elementShowHideOnOffInWork11=='true') {console.log('checked = '+ elementShowHideOnOffInWork11); $('#'+elementIdOnOffInWork11).hide();};
			var tempVariable = calcmypayResourceSummary();
			return 1;},*/
		showHide: function(name1,name2) {
			var elementIdOnOffInWork11=''+name1+'-show-hide';
			var elementShowHideOnOffInWork11=''+name2;
			console.log('success call function, elementIdOnOffInWork='+elementIdOnOffInWork11+' elementShowHideOnOffInWork='+elementShowHideOnOffInWork11);
			console.log('elementShowHideOnOffInWork = '+elementShowHideOnOffInWork11);
			if(elementShowHideOnOffInWork11=='false') {console.log('checked = '+ elementShowHideOnOffInWork11); $('#'+elementIdOnOffInWork11).show();};
			if(elementShowHideOnOffInWork11=='true') {console.log('checked = '+ elementShowHideOnOffInWork11); $('#'+elementIdOnOffInWork11).hide();};
			var tempVariable = calcmypayResourceSummary();
			return 1;}
	}
//---^


// отдельная функция скрывающая или показывающая расчитываемые ресурсы в зависимости от параметров по умолчанию при загрузке страницы
function calcmypayResourceOnOffOnStartup(name1,name2) {
			var elementIdOnOffInWork=''+name1+'-show-hide';
			var elementShowHideOnOffInWork=''+name2;
			console.log('success call function, elementIdOnOffInWork='+elementIdOnOffInWork+' elementShowHideOnOffInWork='+elementShowHideOnOffInWork);
			console.log('elementShowHideOnOffInWork = '+elementShowHideOnOffInWork);
			if(elementShowHideOnOffInWork=='true') {console.log('checked = '+ elementShowHideOnOffInWork); $('#'+elementIdOnOffInWork).show();};
			if(elementShowHideOnOffInWork=='false') {console.log('checked = '+ elementShowHideOnOffInWork); $('#'+elementIdOnOffInWork).hide();};
			var tempVariable = calcmypayResourceSummary(); //обновление итогового значения
			console.log('должен включиться в сумму = '+tempVariable);
			return 1;}
//---^			


// Функция округления до двух знаков после запятой
function okrugl(x,n){
var tochnost=Math.pow(10,n);
var y=(Math.round(x*tochnost))/tochnost;
return y;
}
//---^	

//--- определяем независимую функцию для расчета итогов
function calcmypayResourceSummary(){
nodeForSummary = document.getElementsByClassName("calcmypay-summ-row");
var nodeForSummaryLength = nodeForSummary.length; // количество элементов в которых определены суммируемые ресурсы 
console.log('nodeForSummaryLength = '+nodeForSummaryLength);
// цикл по основным элементам открытым для изменеия
var finishVariableSummaryInclude = 0;
for (var i=0; i<nodeForSummaryLength; i++){
	var temporaryVariableSummary = '';
	var temporaryVariableSummaryNumber = 0;
	var elem = nodeForSummary[i].parentNode;
		 temporaryVariableSummaryInclude = window.getComputedStyle(elem,null).getPropertyValue("display");
		 temporaryVariableSummaryInclude = ''+temporaryVariableSummaryInclude;
		 console.log('temporaryVariableSummaryInclude = '+temporaryVariableSummaryInclude);
		if (temporaryVariableSummaryInclude == 'block') { 
			console.log('success! it\'s work!');
			console.log('temporaryVariableSummaryInclude = '+temporaryVariableSummaryInclude);
			temporaryVariableSummary = nodeForSummary[i].children[5].lastElementChild.textContent;
			temporaryVariableSummaryNumber = parseFloat(temporaryVariableSummary)*1;
			console.log('temporaryVariableSummary['+i+'] = ' +temporaryVariableSummary);
			console.log('temporaryVariableSummaryNumber['+i+'] = ' +temporaryVariableSummaryNumber);
		}
		finishVariableSummaryInclude = finishVariableSummaryInclude + temporaryVariableSummaryNumber;
}
console.log('finishVariableSummaryInclude='+finishVariableSummaryInclude);
document.getElementById('calcmypay-summary').innerHTML=''+finishVariableSummaryInclude+' грн.';
return 1;
}
//---^

//Определяем независимую функцию для проверки и корректировки введенных пользователем показаний перед вычислениями
function checkAndCorrectNumber(x) { //функция для защиты от дурака: преобразует абракадабру в цифровое значение
var x2=x.replace(/[\^|\||,]/g,'.');
// var x2=x1.replace(/,/, '.'); alert("Second step1="+x2);
var x3=x2.replace(/[^\d|^/.]/g, '0'); //alert("Second step2="+x3);
var x4=x3.replace(/[/.]/, '!'); //alert("Second step3="+x4);
var x5=x4.replace(/[/.]/g, '0'); //alert("Second step4="+x5);
var x6=x5.replace(/[/!]/, '.'); //alert("Second step5="+x6);
var x7=x6*1;
if(x7>1000000) { x8=0; }//showComment("Внесен неверный тариф","red","stopMessage"); } 
else { x8=x7; }
var x9=okrugl(x8,4);
//alert("Second step="+x9);
return x9;
}
// ---^

//Определяем независимую функцию для записи значений в куки
function saveCookie(cname,cvalue) {  //Сохранение кукисов
document.cookie=""+cname+"="+cvalue+"; max-age="+(60*60*2); // alert("save");
}
//---^


//Определяем независимую функцию для чтения значений из куки
function readCookie(cookiename) {   //alert("cookiename="+cookiename) //функция чтения значения из куки
var allcookies=document.cookie; //alert("full value="+allcookies);
var temp=allcookies.indexOf(cookiename);
if (temp!=-1) { //alert("start to work");
var beginingvalue=temp+0; // начало значения
var endingvalue=allcookies.indexOf(";",beginingvalue); //окончание значения
if (endingvalue==-1) {endingvalue=allcookies.length; }//alert("endingvalue= "+endingvalue);}
var beginname=allcookies.substring(beginingvalue, endingvalue);
var value=beginname; //alert("value1= "+value);
var allvalue=value.split("="); //alert("value2 = "+allvalue[1]);
return allvalue[1];
}
else return false;//alert("value not defined");		
}




//Определяем независимую функцию для отображения блока
function calcmypayShowTarifInput(name1) {  
	var elementIdOnOffInWork=''+name1;
	$('#'+elementIdOnOffInWork).show();
}
//---^

//Определяем независимую функцию для сокрытия блока
function calcmypayHideTarifInput(name1) {  
	var elementIdOnOffInWork=''+name1;
	console.log("element = "+elementIdOnOffInWork);
	$('#'+elementIdOnOffInWork).hide();
}
//---^


//--- определяем обработчик переключения в режим тарифа из режима показаний
nodeTarifOn = document.getElementById("calcmypay-tarif-on");
nodeTarifOn.onclick = function(){ // начало обработчика событий 
	calcmypayHideTarifInput("calcmypay-check");
	calcmypayShowTarifInput("calcmypay-tarif");
	console.log("success on");	
};
//---^

//--- определяем обработчик переключения в режим ввода показаний из режима тарифов
nodeTarifOf = document.getElementById("calcmypay-tarif-of");
nodeTarifOf.onclick = function(){ // начало обработчика событий 
	calcmypayShowTarifInput("calcmypay-check");
	calcmypayHideTarifInput("calcmypay-tarif");
	console.log("success off");	
};//};
//---^