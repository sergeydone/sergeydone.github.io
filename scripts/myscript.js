//document.parametres.provcity.onclick=function(){alert("fjklejkf");}
var donetskTarif=[1.92*30.2, 0.3084, 1.788, 3.372, 2.136, 3.48*30.2, 17.58, 14.43*3, 150, 39.91, 7];// квартплата, электро, газ, вода, стоки, отопление, горячая вода, вывоз ТБО з чел., УГСО, телефон, домофон
var mariupolTarif=[1.61*30.2, 0.3084, 1.788, 2.208, 1.08, 9.12*30.2, 21.60, 6.04*3, 150, 39.91, 7];// квартплата, электро, газ, вода, стоки, отопление, горячая вода, вывоз ТБО з чел., УГСО, телефон, домофон
var krasnoarmeyskTarif=[2.07*30.2, 0.3084, 1.788, 4.49, 4.61, 12.67*30.2, 0, 5.51*3, 150, 39.91, 7];// квартплата, электро, газ, вода, стоки, отопление, горячая вода, вывоз ТБО з чел., УГСО, телефон, домофон
var allTarif=[donetskTarif,mariupolTarif,krasnoarmeyskTarif];

// --------------------------------------------------------------
var cdata=new Date();
var cmonth=cdata.getMonth(); 
var cyear=cdata.getFullYear();
var amonth=['01','02','03','04','05','06','07','08','09','10','11','12'];
if (cmonth<1) cmonthkoef=11; else cmonthkoef=cmonth-1;
var cmonthnorm=amonth[cmonthkoef];
var cfulldate=cmonthnorm+'.'+cyear;
var h=navigator.cookieEnabled;  // проверка поддержка cookie браузером
//var tarif="min"; // установка минимального тарифа для расчета

function saveCookie(cname,cvalue) {  //Сохранение кукисов
document.cookie=""+cname+"="+cvalue+"; max-age="+(60*60*2);
// alert("save");
}

function hideSwitchers() { // функция для скрытия переключателей сайдбара и отображения формы ввода тарифов
$('#hidehide').hide();
$('#showshow').show();
// Переключаем город на Донецк - ВРЕМЕННО!!!
// $('#provcity').hide();
document.parametres.provcity.options.length=1; // Удаляем список городов
//document.parametres.provcity.options[1].selected="true";
//document.parametres.provcity.options[0].value=document.parametres.provcity.options[2].value;
//document.parametres.provcity.options[0].text=document.parametres.provcity.options[2].text;
// var donetskCity= new Option("Донецк","Донецк",true,true);
// var town=document.parametres.provcity;
// town.options[town.options.length]=donetskCity;
// Дополняем выводом в поля input забитых в программу или записаных в кукисы тарифов
 if (readCookie('askueTarifKvartira')) { 
 	var tarif1=readCookie('askueTarifKvartira'); allTarif[0][0]=tarif1;}
 else var tarif1=allTarif[0][0]; 
 document.getElementById('mytarif1').value=okrugl(tarif1,2);

 if (readCookie('askueTarifElectro')) { var tarif2=readCookie('askueTarifElectro');  allTarif[0][1]=tarif2;}
 else var tarif2=allTarif[0][1]; 
 document.getElementById('mytarif2').value=okrugl(tarif2,4);

 if (readCookie('askueTarifGas')) { var tarif3=readCookie('askueTarifGas');  allTarif[0][2]=tarif3;}
 else var tarif3=allTarif[0][2]; 
 document.getElementById('mytarif3').value=okrugl(tarif3,4);

 if (readCookie('askueTarifHVoda')) { var tarif4=readCookie('askueTarifHVoda');  allTarif[0][3]=tarif4;}
 else var tarif4=allTarif[0][3]; 
 document.getElementById('mytarif4').value=okrugl(tarif4,4);

 if (readCookie('askueTarifStoki')) { var tarif5=readCookie('askueTarifStoki');  allTarif[0][4]=tarif5;}
 else var tarif5=allTarif[0][4]; 
 document.getElementById('mytarif5').value=okrugl(tarif5,4);

 if (readCookie('askueTarifOtoplenie')) { var tarif6=readCookie('askueTarifOtoplenie');  allTarif[0][5]=tarif6;}
 else var tarif6=allTarif[0][5]; 
 document.getElementById('mytarif6').value=okrugl(tarif6,2);

 if (readCookie('askueTarifGVoda')) { var tarif7=readCookie('askueTarifGVoda');  allTarif[0][6]=tarif7;}
 else var tarif7=allTarif[0][6]; 
 document.getElementById('mytarif7').value=okrugl(tarif7,2);

 if (readCookie('askueTarifTBO')) { var tarif8=readCookie('askueTarifTBO');  allTarif[0][7]=tarif8;}
 else var tarif8=allTarif[0][7]; 
 document.getElementById('mytarif8').value=okrugl(tarif8,2);

 if (readCookie('askueTarifUGSO')) { var tarif9=readCookie('askueTarifUGSO');  allTarif[0][8]=tarif9;}
 else var tarif9=allTarif[0][8]; 
 document.getElementById('mytarif9').value=okrugl(tarif9,2);

 if (readCookie('askueTarifTelefon')) { var tarif10=readCookie('askueTarifTelefon');  allTarif[0][9]=tarif10;}
 else var tarif10=allTarif[0][9]; 
 document.getElementById('mytarif10').value=okrugl(tarif10,2);

 if (readCookie('askueTarifDomofon')) { var tarif11=readCookie('askueTarifDomofon');  allTarif[0][10]=tarif11;}
 else var tarif11=allTarif[0][10]; 
 document.getElementById('mytarif11').value=okrugl(tarif11,2);
// 
}

function showSwitchers() { // функция для отображения переключателей сайдбара
$('#showshow').hide();
$('#hidehide').show();
document.parametres.provcity.options.length=3;
var mariupolCity = new Option("Мариуполь","Мариуполь",false,false);
var krasnoarmeyskCity= new Option("Красноармейск","Красноармейск",false,false);
var town=document.parametres.provcity;
town.options[1]=mariupolCity;
town.options[2]=krasnoarmeyskCity;
}


function readCookie(cookiename) {   //функция чтения значения из куки
//alert("cookiename="+cookiename)
var allcookies=document.cookie;
//alert("full value="+allcookies);
var temp=allcookies.indexOf(cookiename);

if (temp!=-1) { //alert("start to work");
var beginingvalue=temp+0; // начало значения
var endingvalue=allcookies.indexOf(";",beginingvalue); //окончание значения
if (endingvalue==-1) {endingvalue=allcookies.length; }//alert("endingvalue= "+endingvalue);}
var beginname=allcookies.substring(beginingvalue, endingvalue);
var value=beginname;
//alert("value1= "+value);
var allvalue=value.split("=");
//alert("value2 = "+allvalue[1]);
return allvalue[1];
}
else return false;//alert("value not defined");		
}




//Создание массива коэффициентов
koef=new Array(13);

// Функция округления до двух знаков после запятой
function okrugl(x,n){
var tochnost=Math.pow(10,n);
var y=(Math.round(x*tochnost))/tochnost;
return y;
}



//фукция сохранения параметров клиента в кукисы
function saveParametr(){
//alert("saving work");

var recname=document.forms.formaRecord.rec1.value;
saveCookie('askuename',recname);
var reclname=document.forms.formaRecord.rec2.value;
saveCookie('askuelname',reclname);
var reccod=document.forms.formaRecord.rec3.value;
saveCookie('askuecode',reccod);
					var recElectro1Nocheck=document.forms.formaSchet.Electro1.value;
					var recElectro1=checkAndCorrectNumber(recElectro1Nocheck);
					saveCookie('askueElectro1',recElectro1); 
					
					var recElectro2Nocheck=document.forms.formaSchet.Electro2.value;
					var recElectro2=checkAndCorrectNumber(recElectro2Nocheck);
					saveCookie('askueElectro2',recElectro2);
				
					var recGas1Nocheck=document.forms.formaSchet.Gas1.value;
					var recGas11=checkAndCorrectNumber(recGas1Nocheck); 
					saveCookie('askueGas1',recGas1);
					
					var recGas2Nocheck=document.forms.formaSchet.Gas2.value;
					var recGas2=checkAndCorrectNumber(recGas2Nocheck); 
					saveCookie('askueGas2',recGas2);
					
					var recWater1Nocheck=document.forms.formaSchet.Water1.value;
					var recWater1=checkAndCorrectNumber(recWater1Nocheck); 
					saveCookie('askueWater1',recWater1);
					
					var recWater2Nocheck=document.forms.formaSchet.Water2.value;
					var recWater2=checkAndCorrectNumber(recWater2Nocheck); 
					saveCookie('askueWater2',recWater2);
					
					var recHwater1Nocheck=document.forms.formaSchet.Hwater1.value;
					var recHwater1=checkAndCorrectNumber(recHwater1Nocheck); 
					saveCookie('askueHwater1',recHwater1);
					
					var recHwater2Nocheck=document.forms.formaSchet.Hwater2.value;
					var recHwater2=checkAndCorrectNumber(recHwater2Nocheck); 
					saveCookie('askueHwater2',recHwater2);
					




//alert("wow = "+fname);
//alert("");
}

function checkAndCorrectNumber(x) { //функция для защиты от дурака при вводе тарифа: преобразует абракадабру в цифровое значение
// $('#stopMessage').hide();
// var x1=x; if(isNaN(x1)) showComment("Произведена автокоррекция внесенного тарифа","red","stopMessage");
var x2=x.replace(/[\^|\||,]/g,'.');
// var x2=x1.replace(/,/, '.'); alert("Second step1="+x2);
var x3=x2.replace(/[^\d|^/.]/g, '0'); //alert("Second step2="+x3);
var x4=x3.replace(/[/.]/, '!'); //alert("Second step3="+x4);
var x5=x4.replace(/[/.]/g, '0'); //alert("Second step4="+x5);
var x6=x5.replace(/[/!]/, '.'); //alert("Second step5="+x6);
var x7=x6*1;
if(x7>1000000) { x8=allTarif[0][0]; }//showComment("Внесен неверный тариф","red","stopMessage"); } 
else { x8=x7; }
var x9=okrugl(x8,4);
//alert("Second step="+x9);
return x9;
}

function saveTarif() {   // функция сохраняет в кукисы собственные тарифы пользователя
var recTarifKvartiraNocheck=document.forms.myTarifs.mytarif1.value+'';
var recTarifKvartira=checkAndCorrectNumber(recTarifKvartiraNocheck); 
saveCookie('askueTarifKvartira',recTarifKvartira);
var recTarifElectroNocheck=document.forms.myTarifs.mytarif2.value;
var recTarifElectro=checkAndCorrectNumber(recTarifElectroNocheck); 
saveCookie('askueTarifElectro',recTarifElectro);
var recTarifGasNocheck=document.forms.myTarifs.mytarif3.value;
var recTarifGas=checkAndCorrectNumber(recTarifGasNocheck);
saveCookie('askueTarifGas',recTarifGas);
var recTarifHVodaNocheck=document.forms.myTarifs.mytarif4.value;
var recTarifHVoda=checkAndCorrectNumber(recTarifHVodaNocheck);
saveCookie('askueTarifHVoda',recTarifHVoda);
var recTarifStokiNocheck=document.forms.myTarifs.mytarif5.value;
var recTarifStoki=checkAndCorrectNumber(recTarifStokiNocheck);
saveCookie('askueTarifStoki',recTarifStoki);
var recTarifOtoplenieNocheck=document.forms.myTarifs.mytarif6.value;
var recTarifOtoplenie=checkAndCorrectNumber(recTarifOtoplenieNocheck);
saveCookie('askueTarifOtoplenie',recTarifOtoplenie);
var recTarifGVodaNocheck=document.forms.myTarifs.mytarif7.value;
var recTarifGVoda=checkAndCorrectNumber(recTarifGVodaNocheck);
saveCookie('askueTarifGVoda',recTarifGVoda);
var recTarifTBONocheck=document.forms.myTarifs.mytarif8.value;
var recTarifTBO=checkAndCorrectNumber(recTarifTBONocheck);
saveCookie('askueTarifTBO',recTarifTBO);
var recTarifUGSONocheck=document.forms.myTarifs.mytarif9.value;
var recTarifUGSO=checkAndCorrectNumber(recTarifUGSONocheck);
saveCookie('askueTarifUGSO',recTarifUGSO);
var recTarifTelefonNocheck=document.forms.myTarifs.mytarif10.value;
var recTarifTelefon=checkAndCorrectNumber(recTarifTelefonNocheck);
saveCookie('askueTarifTelefon',recTarifTelefon);					
var recTarifDomofonNocheck=document.forms.myTarifs.mytarif11.value;
var recTarifDomofon=checkAndCorrectNumber(recTarifDomofonNocheck);
saveCookie('askueTarifDomofon',recTarifDomofon);
}

function saveOldTarif() {   // функция сохраняет в кукисы предыдущие тарифы пользователя
// alert("start to save old tarif");
// alert("1="+allTarif[0][0]);
var recTarifKvartira=allTarif[0][0]; 
// alert("2="+recTarifKvartira);
saveCookie('askueTarifKvartira',recTarifKvartira);
var recTarifElectro=allTarif[0][1];
saveCookie('askueTarifElectro',recTarifElectro);
var recTarifGas=allTarif[0][2];
saveCookie('askueTarifGas',recTarifGas);
var recTarifHVoda=allTarif[0][3];
saveCookie('askueTarifHVoda',recTarifHVoda);
var recTarifStoki=allTarif[0][4];
saveCookie('askueTarifStoki',recTarifStoki);
var recTarifOtoplenie=allTarif[0][5];
saveCookie('askueTarifOtoplenie',recTarifOtoplenie);
var recTarifGVoda=allTarif[0][6];
saveCookie('askueTarifGVoda',recTarifGVoda);
var recTarifTBO=allTarif[0][7];
saveCookie('askueTarifTBO',recTarifTBO);
var recTarifUGSO=allTarif[0][8];
saveCookie('askueTarifUGSO',recTarifUGSO);
var recTarifTelefon=allTarif[0][9];
saveCookie('askueTarifTelefon',recTarifTelefon);					
var recTarifDomofon=allTarif[0][10];
saveCookie('askueTarifDomofon',recTarifDomofon);
// alert("finisht to save old tarif")
}

// Проверка сохранности массива коэффициентов сначала. Теперь тестовая проверка. Теперь обнуление кукисов - новый расчет
function probaK() {
//for (var i=1;i<12;i++){
//alert(koef[i]);
//var allcookies=document.cookie;
//alert("full value="+allcookies);
saveCookie('askuename','');
saveCookie('askuelname','');
saveCookie('askuecode','');
saveCookie('askueElectro1','');
saveCookie('askueElectro2','');
saveCookie('askueGas1','');
saveCookie('askueGas2','');
saveCookie('askueWater1','');
saveCookie('askueWater2','');
saveCookie('askueHwater1','');
saveCookie('askueHwater2','');
saveCookie('askueTarifKvartira','');
saveCookie('askueTarifElectro','');
saveCookie('askueTarifGas','');
saveCookie('askueTarifHVoda','');
saveCookie('askueTarifStoki','');
saveCookie('askueTarifOtoplenie','');
saveCookie('askueTarifGVoda','');
saveCookie('askueTarifTBO','');
saveCookie('askueTarifUGSO','');
saveCookie('askueTarifTelefon','');
saveCookie('askueTarifDomofon','');
location="index.html";
}

function showComment(message,mesColor,namePosition) {
	document.getElementById(namePosition).innerHTML="*"+message; 
	document.getElementById(namePosition).style="color:"+mesColor; 
}


function toStart() {   //функция запускающая начало вычислений
proba();
showSwitchers();
//saveCookie(); //('askuename','Ivan');
//readCookie('askuename');
}


//Функция скры тия и отображения нужных для расчета строк квитанции
function proba() {
//-----Блок автозаполнения колонок---------------------------------------------------------------------------------------
if (readCookie('askuename')) { 
document.getElementById('rec1').value=readCookie('askuename');} 
if (readCookie('askuelname')) { 
document.getElementById('rec2').value=readCookie('askuelname');} 
if (readCookie('askuecode')) { 
document.getElementById('rec3').value=readCookie('askuecode');} 
				if (readCookie('askueElectro1')) { 
				document.getElementById('Electro1').value=readCookie('askueElectro1');} 
				if (readCookie('askueElectro2')) {
				document.getElementById('Electro2').value=readCookie('askueElectro2');}
				if (readCookie('askueGas1')) {
				document.getElementById('Gas1').value=readCookie('askueGas1');}
				if (readCookie('askueGas2')) {
				document.getElementById('Gas2').value=readCookie('askueGas2');}
				if (readCookie('askueWater1')) {
				document.getElementById('Water1').value=readCookie('askueWater1');}
				if (readCookie('askueWater2')) {
				document.getElementById('Water2').value=readCookie('askueWater2');}
				if (readCookie('askueHwater1')) {
				document.getElementById('Hwater1').value=readCookie('askueHwater1');}
				if (readCookie('askueHwater2')) {
				document.getElementById('Hwater2').value=readCookie('askueHwater2');}
//автозаполнение даты
$('.cdate').text(cfulldate);

//-----Конец блока автозаполнения колонок-----------------------------------------------------------------------------------------


	
//Обнуление коэффициентов
for(var i=0;i<12;i++) {koef[i]=0;}

//$('#test1').css({color:'green'});
//var row11=document.parametres.row1.checked;
//$('#test1').hide();
//alert("success "+row11);
//if (document.parametres.prov1.checked) {alert("success ");}
if (h) {
showComment("все готово к вычислениям","green","primechanie"); 
// document.getElementById('primechanie').innerHTML="*все готово к вычислениям"; 
// document.getElementById('primechanie').style="color:green"; 
}
else { 
showComment("сохранение значений не поддеживается вашим броузером","red","primechanie"); 
// document.getElementById('primechanie').innerHTML="*сохранение значений не поддеживается вашим браузером"; 
// document.getElementById('primechanie').style="color:red"; 
}
if (!(document.parametres.prov1.checked)) {$('#rows1').hide(); koef[1]=0;};
if (!(document.parametres.prov2.checked)) {$('#rows2').hide(); koef[2]=0;};
if (!(document.parametres.prov3.checked)) {$('#rows3').hide(); koef[3]=0};
if (!(document.parametres.prov4.checked)) {$('#rows4').hide(); koef[4]=0};
if (!(document.parametres.prov5.checked)) {$('#rows5').hide(); koef[5]=0};
if (!(document.parametres.prov6.checked)) {$('#rows6').hide(); koef[6]=0};
if (!(document.parametres.prov7.checked)) {$('#rows7').hide(); koef[7]=0};
if (!(document.parametres.prov8.checked)) {$('#rows8').hide(); koef[8]=0};
if (!(document.parametres.prov9.checked)) {$('#rows9').hide(); koef[9]=0};
if (!(document.parametres.prov10.checked)) {$('#rows10').hide(); koef[10]=0};
if (!(document.parametres.prov11.checked)) {$('#rows11').hide(); koef[11]=0};
if ((document.parametres.prov1.checked)) {$('#rows1').show(); koef[1]=1;}
if ((document.parametres.prov2.checked)) {$('#rows2').show(); koef[2]=1;}
if ((document.parametres.prov3.checked)) {$('#rows3').show(); koef[3]=1;}
if ((document.parametres.prov4.checked)) {$('#rows4').show(); koef[4]=1;}
if ((document.parametres.prov5.checked)) {$('#rows5').show(); koef[5]=1;}
if ((document.parametres.prov6.checked)) {$('#rows6').show(); koef[6]=1;}
if ((document.parametres.prov7.checked)) {$('#rows7').show(); koef[7]=1;}
if ((document.parametres.prov8.checked)) {$('#rows8').show(); koef[8]=1;}
if ((document.parametres.prov9.checked)) {$('#rows9').show(); koef[9]=1;}
if ((document.parametres.prov10.checked)) {$('#rows10').show(); koef[10]=1;}
if ((document.parametres.prov11.checked)) {$('#rows11').show(); koef[11]=1;}
//if ((document.parametres.prov12.checked)) {$('#hidehide').hide()}; 
//if (!(document.parametres.prov12.checked)) {$('#hidehide').show()}; 
var tarif="max";
koef.tarif=tarif;
var city=document.parametres.provcity.value;
koef.city=city;
return koef;

}

//Функция подсчета стоимости коммунальных услуг 
function messme() {
	


var city=koef.city;
// Тарифы Донецка - константы или кукисы
if (city=="Донецк") {
				if (readCookie('askueTarifKvartira')) { var tarif1=readCookie('askueTarifKvartira');}
				else var tarif1=allTarif[0][0]; // квартплата 100m2
				
				if (readCookie('askueTarifElectro')) { var tarif2=readCookie('askueTarifElectro');}
				else var tarif2=allTarif[0][1]; // электро

				if (readCookie('askueTarifGas')) { var tarif3=readCookie('askueTarifGas');}
				else var tarif3=allTarif[0][2]; // газ

				if (readCookie('askueTarifHVoda')) { var tarif4=readCookie('askueTarifHVoda');}
				else var tarif4=allTarif[0][3]; // вода

				if (readCookie('askueTarifStoki')) { var tarif5=readCookie('askueTarifStoki');}
				else var tarif5=allTarif[0][4]; // стоки

				if (readCookie('askueTarifOtoplenie')) { var tarif6=readCookie('askueTarifOtoplenie');}
				else var tarif6=allTarif[0][5]; // отопление 100m2

				if (readCookie('askueTarifGVoda')) { var tarif7=readCookie('askueTarifGVoda');}
				else var tarif7=allTarif[0][6]; // горячая вода

				if (readCookie('askueTarifTBO')) { var tarif8=readCookie('askueTarifTBO');}
				else var tarif8=allTarif[0][7]; // вывоз тбо за 3 человек

				if (readCookie('askueTarifUGSO')) { var tarif9=readCookie('askueTarifUGSO');}
				else var tarif9=allTarif[0][8]; // УГСО

				if (readCookie('askueTarifTelefon')) { var tarif10=readCookie('askueTarifTelefon');}
				else var tarif10=allTarif[0][9]; // телефон

				if (readCookie('askueTarifDomofon')) { var tarif11=readCookie('askueTarifDomofon');}
				else var tarif11=allTarif[0][10]; // домофон
}
// Тарифы Мариуполя - константы
if (city=="Мариуполь") {
var tarif1=allTarif[1][0]; // квартплата 100m2
var tarif2=allTarif[1][1]; // электро
var tarif3=allTarif[1][2]; // газ
var tarif4=allTarif[1][3]; // вода
var tarif5=allTarif[1][4]; // стоки
var tarif6=allTarif[1][5]; // отопление 100m2
var tarif7=allTarif[1][6]; // горячая вода
var tarif8=allTarif[1][7]; // вывоз тбо за 3 человек
var tarif9=allTarif[1][8]; // УГСО
var tarif10=allTarif[1][9]; // телефон
var tarif11=allTarif[1][10]; // домофон
}
// Тарифы Красноармейска - константы
if (city=="Красноармейск") {
var tarif1=allTarif[2][0]; // квартплата 100m2
var tarif2=allTarif[2][1]; // электро
var tarif3=allTarif[2][2]; // газ
var tarif4=allTarif[2][3]; // вода
var tarif5=allTarif[2][4]; // стоки
var tarif6=allTarif[2][5]; // отопление 100m2
var tarif7=allTarif[2][6]; // горячая вода
var tarif8=allTarif[2][7]; // вывоз тбо за 3 человек
var tarif9=allTarif[2][8]; // УГСО
var tarif10=allTarif[2][9]; // телефон
var tarif11=allTarif[2][10]; // домофон
}
// Заполнение формы сохраненными значениями
//if (readCookie('askueElectro1')) { 
//document.getElementById('Electro1').value=readCookie('askueElectro1');} 

//Расчет платежей за каждую услугу
//Квартплата
var plata1=okrugl(tarif1,2); //квартплата
//document.getElementById('bFlat').innerHTML=Math.floor(tarif1)+"-"+Math.floor((tarif1).toFixed(2).slice(2));
document.getElementById('bFlat').innerHTML=plata1;

//Стоимость электроэнерги
var a2=document.forms.formaSchet.Electro1.value;
var b2=document.forms.formaSchet.Electro2.value;
/*var c2=b2-a2;
var c21=parseInt(c2);
var c22=(c2%1).toFixed(2).slice(2);
var d2=c2*tarif2;
var plata2=d2 //электроэнергия
var d21=parseInt(d2); 
var d22=(d2%1).toFixed(2).slice(2); 
document.getElementById('sElectro').innerHTML=c21+"."+c22;
document.getElementById('bElectro').innerHTML=Math.floor(d21)+"-"+Math.floor(d22);
*/
var c2=okrugl((okrugl(b2,2)-okrugl(a2,2)),2);
var d2=c2*tarif2;
var plata2=okrugl(d2,2); //электроэнергия
document.getElementById('sElectro').innerHTML=c2;
document.getElementById('bElectro').innerHTML=plata2;
	
//Стоимость природного газа
var a3=document.forms.formaSchet.Gas1.value;
var b3=document.forms.formaSchet.Gas2.value;
/*var c3=b3-a3;
var c31=parseInt(c2);
var c32=(c3%1).toFixed(2).slice(2);
var d3=c3*tarif3;
var plata3=d3;//газ
var d31=parseInt(d3); 
var d32=(d3%1).toFixed(2).slice(2); 
document.getElementById('sGas').innerHTML=c31+"."+c32;
document.getElementById('bGas').innerHTML=Math.floor(d31)+"-"+Math.floor(d32);*/
var c3=okrugl((okrugl(b3,2)-okrugl(a3,2)),2);
var d3=c3*tarif3;
var plata3=okrugl(d3,2); //природный газ
document.getElementById('sGas').innerHTML=c3;
document.getElementById('bGas').innerHTML=plata3;

//Стоимость холодной воды
var a4=document.forms.formaSchet.Water1.value;
var b4=document.forms.formaSchet.Water2.value;
/* var c4=b4-a4;
var c41=parseInt(c4);
var c42=(c4%1).toFixed(2).slice(2);
var d4=c3*tarif4;
var plata4=d4;//вода
var d41=parseInt(d4); 
var d42=(d4%1).toFixed(2).slice(2); 
document.getElementById('sWater').innerHTML=c41+"."+c42;
document.getElementById('bWater').innerHTML=Math.floor(d41)+"-"+Math.floor(d42); */
var c4=okrugl((okrugl(b4,2)-okrugl(a4,2)),2);
var d4=c4*tarif4;
var plata4=okrugl(d4,2); //Холодная вода
document.getElementById('sWater').innerHTML=c4;
document.getElementById('bWater').innerHTML=plata4;

//Стоимость стоков
var d5=c4*tarif5;
var plata5=okrugl(d5,2); //Стоки
//document.getElementById('bStoki').innerHTML=Math.floor(tarif5)+"-"+Math.floor((tarif5).toFixed(2).slice(2));
document.getElementById('bStoki').innerHTML=plata5;

//Стоимость отопления
var plata6=okrugl(tarif6,2); //Отопление
//document.getElementById('bOtoplenie').innerHTML=Math.floor(tarif6)+"-"+Math.floor((tarif6).toFixed(2).slice(2));
document.getElementById('bOtoplenie').innerHTML=plata6;

//Стоимость горячей воды
var a7=document.forms.formaSchet.Hwater1.value;
var b7=document.forms.formaSchet.Hwater2.value;
/*var c7=b7-a7;
var c71=parseInt(c7);
var c72=(c7%1).toFixed(2).slice(2);
var d7=c7*tarif7;
var plata7=d7;//Горячая вода
var d71=parseInt(d7); 
var d72=(d7%1).toFixed(2).slice(2); 
document.getElementById('sHwater').innerHTML=c71+"."+c72;
document.getElementById('bHwater').innerHTML=Math.floor(d71)+"-"+Math.floor(d72);*/
var c7=okrugl((okrugl(b7,2)-okrugl(a7,2)),2);
var d7=c7*tarif7;
var plata7=okrugl(d7,2); //горячая вода
document.getElementById('sHwater').innerHTML=c7;
document.getElementById('bHwater').innerHTML=plata7;

//Стоимость вывоза ТБО
var plata8=okrugl(tarif8,2); //Вывоз ТБО
//document.getElementById('bTBO').innerHTML=Math.floor(tarif8)+"-"+Math.floor((tarif8).toFixed(2).slice(2));
document.getElementById('bTBO').innerHTML=plata8;

//Стоимость услуг охраны
var plata9=okrugl(tarif9,2); //Услуги УГСО 
//document.getElementById('bUGSO').innerHTML=Math.floor(tarif9)+"-"+Math.floor((tarif9).toFixed(2).slice(2));
document.getElementById('bUGSO').innerHTML=plata9;

//Стоимость телефона
var plata10=okrugl(tarif10,2); //Телефон
//document.getElementById('bTelephon').innerHTML=Math.floor(tarif10)+"-"+Math.floor((tarif10).toFixed(2).slice(2));
document.getElementById('bTelephon').innerHTML=plata10;

//Стоимость домофона
var plata11=okrugl(tarif11,2); //Домофон
//document.getElementById('bDomophon').innerHTML=Math.floor(tarif11)+"-"+Math.floor((tarif11).toFixed(2).slice(2));
document.getElementById('bDomophon').innerHTML=plata11;

//Итоговая сумма платежа
var itogo=plata1*koef[1]+plata2*koef[2]+plata3*koef[3]+plata4*koef[4]+plata5*koef[5]+plata6*koef[6]+plata7*koef[7]+plata8*koef[8]+plata9*koef[9]+plata10*koef[10]+plata11*koef[11];
var platasum=okrugl(itogo,2);
//document.getElementById('bItogo').innerHTML=Math.floor(itogo)+"-"+Math.floor((itogo).toFixed(2).slice(2));
document.getElementById('bItogo').innerHTML=platasum;


}