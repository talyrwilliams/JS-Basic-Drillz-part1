class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input.substring(0, 3);
    }

    getSuffix(input){
        return input.substring(3, 6);
    }

    getMiddleCharacter(input){
        
        var mid = Math.floor(input.length / 2);
        return input[mid];

    }

    getFirstWord(input){
        return input.split(" ")[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
        return spaceDelimnatedInput.split(" ")[1];
    }
    
    // reverse(input){
    //     return input.split("").reverse().join("");
    // }

    reverse(input){
        return input.split("").reverse().join("").split(" ").reverse().join(" ");
      }



    // What's up Talyr
    //s'tahw pu rylaT


}

module.exports = StrangerStrings;