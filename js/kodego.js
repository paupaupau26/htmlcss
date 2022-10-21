function getAreaOfCircle(radius){
    const pi = 3.14;
    var area = (pi * radius) ** 2;
    return area;
}

function odd_even(input_number){
    if(value % 2 == 0){
        return "odd"
    }else{
        return "even"
    }
    
}
function doCheck(value1){
    char = char.toLowerCase();
    if(value1 == "a"||value1 == "e"||value1 == "i"||value1 == "o" ||value1 == "u"){
        return "vowel";
    }else{
        return "consonant";
    }
    
}

function getCalendarMonthDays(monthName){
    monthName = monthName.toLowerCase();
    switch(monthName){
        case "April":
        case "September":
        case "June":
        case "November":
            return "30";
        case "February":
            return "28";
        default:
            return "31";   
    }
}
function vowelOrConsonant(single_char){
    char = char.toLowerCase();
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        return "vowel";
    }else{
        return "consonant";
    }
}
function incrementCounter(counter, maxvalue, targetDisplay, increment=1){
    if(targetDisplay == null){
        targetDisplay = document.body;
    }
    let addComma = false;
    while(counter <= maxvalue){
        if(addComma){
            targetDisplay.innerHTML += ", ";
        }
        targetDisplay.innerHTML += counter;
        addComma = true;
        counter += increment;
    }
}

function decrementCounter(counter, minvalue, targetDisplay, decrement=1){
    if(targetDisplay == null){
        targetDisplay = document.body;
    }
    let addComma = false;
    while(counter >= minvalue){
        if(addComma){
            targetDisplay.innerHTML += ", ";
        }
        targetDisplay.innerHTML += counter;
        addComma = true;
        counter -= decrement;
    }
}
function getStaffCount(key, value, operator="="){
    let dataCount = 0;
    let i = 0;
    while(i < staff.length){
        switch(key){
            case  "age":
                if(operator == ">" && staff[i][key] > value){
                    dataCount++;
                }else if(operator == "<" && staff[i][key] < value){
                    dataCount++;
                }else if(operator == ">=" && staff[i][key] >= value){
                    dataCount++;
                }else if(operator == "<=" && staff[i][key] <= value){
                    dataCount++;
                }else if(staff[i][key] == value){
                    dataCount++;
                }
                break;
            case "language":
                let j = 0;
                while(j < staff[i].languages.length){
                    if(staff[i].languages[j] == value){
                        dataCount++;
                    }
                    j++;
                }
                break;
            default:
                if(staff[i][key] == value){
                    dataCount++;
                }
                break;
        }
        i++;
    }
    return dataCount;
}

//0,1,1,2,3,5,8,13,21,34,..
function doFibonacciSequence(limit){

    let numbers = [0,1];
    let newValue = 0;
    //let n1 = 0;
    //let n2 = 1;

    if(limit <= 1){
        numbers = numbers.pop();
    }

    for(let i=0; i < limit-2; i++){
        newValue = numbers[i] + numbers[i+1];
        numbers.push(newValue);
        console.log(numbers);
    }

    return numbers;
}