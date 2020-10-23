function creaCalendari(paramatreAny,paramatreMes,paramatreDia){
    let dia1 = new Date(paramatreAny,paramatreMes-1,1);
    let dia1num = dia1.getDay();
    let stringfinal = "";
    if(dia1num==0){
        dia1num=7;
    }
    let diesmes = 0;
    if(paramatreMes==2){
        diesmes=28;//Falta calcular any bi
    }else if(paramatreMes==4 || paramatreMes==6 || paramatreMes==9 || paramatreMes==11){
        diesmes=30;
    }else{
        diesmes=31;
    }
    stringfinal+='<h2 class="mes" onClick="taulaAny()">'+escriuMes(parseInt(paramatreMes))+' de '+(paramatreAny)+'</h2>';
    stringfinal+='<table class="taula" border="1px">';
    stringfinal+='<tr>';
    stringfinal+='<td class="diessetmana">Dilluns</td>';
    stringfinal+='<td class="diessetmana">Dimarts</td>';
    stringfinal+='<td class="diessetmana">Dimecres</td>';
    stringfinal+='<td class="diessetmana">Dijous</td>';
    stringfinal+='<td class="diessetmana">Divendres</td>';
    stringfinal+='<td class="diessetmana">Dissabte</td>';
    stringfinal+='<td class="diessetmana">Diumenge</td>';
    stringfinal+='</tr>';
    for(let i=1;i<(diesmes+1);i++){
        stringfinal+="<tr>";
        for(let j=0;j<7;j++){
            if(dia1num>1){
                stringfinal+='<td class="blocbuit"></td>';
                dia1num--;
                i=1;
            }else if(i<=diesmes){
                if(i==paramatreDia){
                    stringfinal+='<td class="diabuscat">'+i+'</td>';
                }else{
                    stringfinal+='<td class="blocnumero">'+i+'</td>';
                }
                i++;
            }else{
                stringfinal+='<td class="blocbuit"></td>';
                i++;
            }
        }
        i--;
        stringfinal+="</tr>";
    }
    stringfinal+="</table>";
    return stringfinal;
}
function entraDades(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let any = document.getElementById("any").value;
    document.getElementsByClassName("calendari")[0].innerHTML = creaCalendari(any,mes,dia);
}
function mesMenys(){
    let dia = document.getElementsByClassName("input")[0].value;
    let mes = document.getElementsByClassName("input")[1].value;
    let any = document.getElementsByClassName("input")[2].value;
    if(mes!=1){
        mes--;
    }else{
        mes=12;
        any--;
    }
    document.getElementsByClassName("calendari")[0].innerHTML = creaCalendari(any,mes,dia);
    defineixData(dia,mes,any);
}
function mesMes(){
    let dia = document.getElementsByClassName("input")[0].value;
    let mes = document.getElementsByClassName("input")[1].value;
    let any = document.getElementsByClassName("input")[2].value;
    if(mes!=12){
        mes++;
    }else{
        mes=1;
        any++;
    }
    if(mes==13){
        mes=0;
    }
    document.getElementsByClassName("calendari")[0].innerHTML = creaCalendari(any,mes,dia);
    defineixData(dia,mes,any);
}
function defineixData(dia,mes,any){
    if(mes==0){
        mes=12;
    }
    document.getElementsByClassName("input")[0].value=dia;
    document.getElementsByClassName("input")[1].value=mes;
    document.getElementsByClassName("input")[2].value=any;

}
function escriuMes(mes){
    switch(mes){
        case 12:
            return "Desembre";
        case 1:
            return "Gener";
        case 2:
            return "Febrer";
        case 3:
            return "Març";
        case 4:
            return "Abril";
        case 5:
            return "Maig";
        case 6:
            return "Juny";
        case 7:
            return "Juliol";
        case 8:
            return "Agost";
        case 9:
            return "Setembre";
        case 10:
            return "Octubre";
        case 11:
            return "Novembre";        
    }
}
function ompleCalendaris(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let any = urlParams.get('any')
    for(let i=0;i<document.getElementsByClassName("calendari").length;i++){
        document.getElementsByClassName("calendari")[i].innerHTML = creaCalendari(any,i+1);
    }
}
function taulaAny(){	
	let any  = document.getElementsByClassName("input")[2].value;
	window.location.href = "anycalendari.html?"+"any="+any;
}
