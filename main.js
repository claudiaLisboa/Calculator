


/*here JavaScript*/

                    /*Function display numbers when they are clicked */
                    function calcNum(num){

                        if( typeof gdisplay == 'undefined'){
                            document.calcform.display.value = '';
                        }
                        document.calcform.display.value = document.calcform.display.value + num;

                        gdisplay = 1;
                    }

                    /*Function clean numbers on display */
                    function calcClean(){
                        document.calcform.display.value = '';
                        delete gvalue;
                        delete goper;
                        delete gdisplay;
                    }

                    /*Function operation */
                    
                    function calCulate(oper,value1,value2){

                       /* var value1 = parseFloat(value1);
                        var value2 = parseFloat(value2);
                        var value = 0;*/
                         var value= 0;
                        
                        if (oper == "addition"){ 
                           var value = parseFloat(value1) +  parseFloat(value2);
                        } else if (oper == "subtraction") {
                          var value = value1 - value2;
                         } else if (oper == "multiplication"){
                          var value = value1*value2;
                         }   else if(oper == "division"){
                           var value = value1 / value2;
                        }
                       return(value);
                    
                 } 
                 
               
                    /* Function when user do action calculate(+, -, *, /)*/
                    function calcParse(oper){

                        var value = document.calcform.display.value;
                        delete gdisplay;
                         

                        if( typeof goper != 'undefined' && oper == 'result'){
                            gdisplay = calcNum (num);
                            gvalue = calCulate(goper,gdisplay,gvalue,value);
                            document.calcform.display.value = 'gvalue';
                            delete oper;
                            delete gvalue;
                            return(0);
                        }
                        if (typeof gvalue != 'undefined'){
                            gvalue = calCulate(goper,gdisplay,gvalue,value);
                            goper = oper;
                            document.calcform.display.value = 'gvalue';

                        } else {
                            gvalue = value;
                            goper= oper;
                            gdisplay = result;
                        }
                  }   