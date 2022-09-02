import React from 'react';

function isNumber(s) {
    s += ''; // 문자열로 변환
    s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
    if (s === '' || isNaN(s)) return false;
    return true;
}
function Comma(input) { 
	var inputString = ""; 
	var outputString = ""; 
	var counter = 0; 
	var decimalPoint = 0; 
	var end = 0; 
	var modval = 0; 

	inputString = ""+input;
    if(inputString==="undefined" ) inputString="";
    
    inputString = inputString.toString(); 
	outputString = ''; 
	decimalPoint = inputString.indexOf('.', 1); 
	if(decimalPoint === -1) { 
		end = inputString.length - (inputString.charAt(0)==='0' ? 1:0); 
		for (counter=1;counter <=inputString.length; counter++) { 
			modval =counter - Math.floor(counter/3)*3; 
			outputString = (modval===0 && counter <end ? ',' : '') + inputString.charAt(inputString.length - counter) + 
			outputString; 
		} 
	} else { 
		end = decimalPoint - ( inputString.charAt(0)==='-' ? 1 :0); 
		for (counter=1; counter <= decimalPoint ; counter++) { 
			outputString = (counter===0 && counter <end ? ',' : '') + inputString.charAt(decimalPoint - counter) + 
			outputString; 
		} 
		for (counter=decimalPoint; counter < decimalPoint+3; counter++) { 
			outputString += inputString.charAt(counter); 
		} 
	} 
	if (outputString==='0')
		outputString = '';
	return (outputString.replace('-,','-')); 
} 
var tmpAmt=0;
var tmpAmt_pre=0;
const StatementDetail = (props)=>{
    //var acnt_nm=props.acnt_nm.replaceAll(" ","&nbsp;")
    var rightAmt = Number(props.amt_now);
    var rightAmt_pre = Number(props.amt_bef);
    var acnt_cd= props.acnt_cd;
    var leftAmt=0;
    var leftAmt_pre=0;
    var isModAcc=0;
    if(isNumber(props.acnt_cd)){
        if( (acnt_cd >= 195 && acnt_cd <= 200) || (acnt_cd >= 202 && acnt_cd <= 217) || (acnt_cd >= 471 && acnt_cd <= 500) || (acnt_cd >= 401 && acnt_cd <= 430) || (acnt_cd >= 459 && acnt_cd <= 470) || (acnt_cd >= 901 && acnt_cd <= 997) || (acnt_cd >= 801 && acnt_cd <= 900) ){
            leftAmt = Number(props.amt_now);
            leftAmt_pre = Number(props.amt_bef);
            rightAmt = 0;
            rightAmt_pre = 0;
            isModAcc = acnt_cd % 2;

            //유형자산
            //계정코드가 짝수이면 자산 / 홀수이면 누계액으로 인식 21.8.8
            if( (acnt_cd >= 195 && acnt_cd <= 200) || (acnt_cd >= 215 && acnt_cd <= 216) || (acnt_cd >= 471 && acnt_cd <= 500) ){
                if (isModAcc === 1 ) {
                    tmpAmt = leftAmt;
                    tmpAmt_pre = leftAmt_pre;
                    console.log(props.acnt_nm)
                    console.log(acnt_cd)
                    console.log(tmpAmt)
                    console.log(tmpAmt_pre)                    
                } else {
                    //합계를 내지 않는 경우 : 매출원가							영업외손익											판관비
                    if( !(acnt_cd >= 401 && acnt_cd <= 430) &&  !(acnt_cd >= 459 && acnt_cd <= 470) && !(acnt_cd >= 901 && acnt_cd <= 997) && !(acnt_cd >= 801 && acnt_cd <= 900) ){
                        rightAmt = leftAmt + tmpAmt;
                        rightAmt_pre = leftAmt_pre + tmpAmt_pre
                        console.log(props.acnt_nm)
                        console.log(acnt_cd)
    
                        console.log(rightAmt)
                        console.log(rightAmt_pre)                                            
                    }
                }
            } else {
                if (isModAcc === 0 ) {
                    tmpAmt = leftAmt
                    tmpAmt_pre = leftAmt_pre
                } else {
                    //'합계를 내지 않는 경우 : 매출원가							영업외손익											판관비
                    if(  !(acnt_cd >= 401 && acnt_cd <= 430) && !(acnt_cd >= 459 && acnt_cd <= 470) && !(acnt_cd >= 901 && acnt_cd <= 997) && !(acnt_cd >= 801 && acnt_cd <= 900) ){
                        rightAmt = leftAmt + tmpAmt
                        rightAmt_pre = leftAmt_pre + tmpAmt_pre
                    }
                }
            }
        }
    }

    return(
        <tr>
            <td className={isNumber(props.acnt_cd)?"tx-nowrap":"tx-nowrap heading-3"} ><pre>{props.acnt_nm}</pre></td>
            <td className={leftAmt<0?"text-warning text-right":"text-right"} >{leftAmt<0?"("+Comma(leftAmt*-1)+")":Comma(leftAmt)}</td>
            <td className={isNumber(props.acnt_cd)?rightAmt<0?"text-right text-warning":"text-right":" text-right heading-3"}>{rightAmt<0?"("+Comma(rightAmt*-1)+")":Comma(rightAmt)}</td>
            <td className={leftAmt_pre<0?"text-warning text-right":"text-right"} >{leftAmt_pre<0?"("+Comma(leftAmt_pre*-1)+")":Comma(leftAmt_pre)}</td>
            <td className={isNumber(props.acnt_cd)?rightAmt_pre<0?"text-right text-warning":"text-right":" text-right heading-3"}>{rightAmt_pre<0?"("+Comma(rightAmt_pre*-1)+")":Comma(rightAmt_pre)}</td>
        </tr>
    )        



}

export default StatementDetail;
