// Start Foot to mile converting
    // Question 52000 Foot == How many Mile
    // 1 Mile == 5280 Foot (sorce: Google Unit converter)
    // Answer 
    
    function feetToMile(props){
        return props/5280;
    }
    const passDataFromfeetToMileFunctionToConsoleLog = feetToMile(52000);
    console.log("52000 Foot =", Math.trunc(passDataFromfeetToMileFunctionToConsoleLog) , "Mile")

// End Foot to mile converting
// ----------------------------------- //
// Start 14 Chaire 5 Table 12 Bed 
    // Question 01: 1 Chaire = 1 Cubic Feet Wood Then 14 Chaire = How many Cubic Feet wood take
    // Question 02: 1 Table = 3 Cubic Feet Wood Then 5 Table = How many Cubic Feet wood take
    // Question 03: 1 Bed = 5 Cubic Feet Wood Then 12 Bed = How many Cubic Feet wood take
    // Answer 
    
    function woodCalculator(chair , table , bed){
        let chairsWoodCount = 1*chair;
        let tablesWoodCount = 3*table;
        let bedsWoodCount = 5*bed;
        return chairsWoodCount+tablesWoodCount+bedsWoodCount;
    }
    const chairTableBedsValue = woodCalculator(14 , 5 , 12);

    console.log("It will take " , chairTableBedsValue , " cubic feet of wood to make 14 chairs, 5 tables and 12 beds")
// End 14 Chaire 5 Table 12 Bed 
// Start Brick calculator

    function brickCalculator(props){
        let mainBrickZone;
        if (props <= 0){
            mainBrickZone = "Sorry nagative value not allowed";
        } 
        else if (props <= 10){
            const feetCount = props * 15;
            mainBrickZone = feetCount * 1000;
        }
        else if(props <= 20){
            const minusFromprops = props -10;
            const feetCount2 = 10 * 15;
            const feetCount = minusFromprops * 12;
            mainBrickZone = feetCount + feetCount2 * 1000;
        }
        else{
            const minusFromprops = props -20;
            const feetCount = 10 * 15;
            const feetCount2 = 10 * 12;
            const feetCount3 = minusFromprops * 9;
            mainBrickZone = feetCount + feetCount2 + feetCount3 * 1000;
        }
        return mainBrickZone;
    }
    const brickCalculatorPropsValue = brickCalculator(100)
    console.log("Brick calculator :" , brickCalculatorPropsValue)

// End Brick calculator
// Start Tiny Friend 

    function tinyFriend(props){
        let friend = props[0];
        if(props.length == 0){
            friend = "Pleace enter your friend name"
        }
        for (let i = 0; i < props.length; i++) {
            if(props[i].length < friend.length){
                friend = props[i];
            }
        };
        return friend;
    }
    const allFriend = ["Fahim" , "Joy" , "Meraj" , "Tanjim" , "Sajjat"];
    const tinyFriendValue = tinyFriend(allFriend);
    console.log("Tiny Friend :" , tinyFriendValue)

// End Tiny Friend 
