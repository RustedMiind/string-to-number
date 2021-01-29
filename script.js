// functio switch string to integer
// toInt("value")
function toInt(num){
    //vars in function

    var i = 0;
    var integer = null ;
    for(; i < num.length ; i++){
        // it have to path each element in the string 
            // then turn it into integer
        if(// States that have to check is it number or not
            num[i]=="1" ||
            num[i]=="2" ||
            num[i]=="3" ||
            num[i]=="4" ||
            num[i]=="5" ||
            num[i]=="6" ||
            num[i]=="7" ||
            num[i]=="8" ||
            num[i]=="9" ||
            num[i]=="0"
        )//start of above (if) statment
        {
            if(num[i]=="1"){
                integer=(integer*10)+1;
            }else if(num[i]=="2"){
                integer=(integer*10)+2;
            }else if(num[i]=="3"){
                integer=(integer*10)+3;
            }else if(num[i]=="4"){
                integer=(integer*10)+4;
            }else if(num[i]=="5"){
                integer=(integer*10)+5;
            }else if(num[i]=="6"){
                integer=(integer*10)+6;
            }else if(num[i]=="7"){
                integer=(integer*10)+7;
            }else if(num[i]=="8"){
                integer=(integer*10)+8;
            }else if(num[i]=="9"){
                integer=(integer*10)+9;
            }else if(num[i]=="0"){
                integer=integer*10;
            }else{integer=null;
                break}
        }//check wich number for loop end
    }//check if number For loop end
    return integer
}//Function End

//Function that switch string number to decimal 
    // depending on function (((toInt("value")))) :
function toDecimal(num){
    var integerStr = "" ;
    var decimalStr = "" ;
    var decimal = null ;
    var integer = null ;
    var i = 0;
    var result = null ;
    for(; i < num.length ; i++){
        // it have to path each element in the string 
            // then turn it into integer
        if(// check is it number , dot or not
            num[i]=="1" ||
            num[i]=="2" ||
            num[i]=="3" ||
            num[i]=="4" ||
            num[i]=="5" ||
            num[i]=="6" ||
            num[i]=="7" ||
            num[i]=="8" ||
            num[i]=="9" ||
            num[i]=="0"
        ){
            integerStr+=num[i]
        }else if(
            // if string at specefic point = "."
                // we have to break function
            num[i]=="."
        ){
            i+=1;
            break
        }
        
    }// end of above for loop
    for(; i < num.length ; i++){
        // it have to path each element in the string 
            // then turn it into integer
        if(// check is it number , dot or not
            num[i]=="1" ||
            num[i]=="2" ||
            num[i]=="3" ||
            num[i]=="4" ||
            num[i]=="5" ||
            num[i]=="6" ||
            num[i]=="7" ||
            num[i]=="8" ||
            num[i]=="9" ||
            num[i]=="0"
        ){
            decimalStr+=num[i]
        }
        
    }// end of above for loop
    decimal = toInt(decimalStr)/(10**decimalStr.length);
    integer = toInt(integerStr);
    result = integer+decimal;
    return result

}// end of the function
