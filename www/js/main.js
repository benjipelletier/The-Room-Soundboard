
// Theme controller (soon)

var myApp = angular.module('myApp', ['onsen']);


// buttons controller


myApp.controller("mainCtrl", ['$scope', function($scope) {

    $( document ).ready(function() {
        
        if (angular.isUndefined(localStorage["openSound"])) {;
            $scope.openSound = true;
            localStorage["openSound"] = true;
        } else {
            $scope.openSound = localStorage["openSound"];
        }
        if ($scope.openSound == "true") {
            var url = "sounds/OhHiDenny.mp3";
            if (monaca.isIOS){
                var my_media = new Media(url);
                
            }
            else{
                var my_media = document.createElement('audio');
                my_media.src = url;
                
            }
    
            // Play audio
            my_media.play();
            my_media = null;
        }
    });
    
    $scope.changeOpen = function(checked) {
        if(checked.isChecked()) {
            $scope.openSound = true;
            localStorage["openSound"] = true;
        } else {
            $scope.openSound = false;
            localStorage["openSound"] = false;
        }
    }
    //color list - Capitalization needed
$scope.colors = ['Blue', 'Red', 'Green', 'Black'];
//Checks if theme var is undef. default color is blue
 
if (typeof localStorage["theme"] == "undefined") {
    localStorage["theme"] = "blue";
}

$scope.dynamic = localStorage["theme"];
//changes dynamic var based on button click

$scope.changeTo = function(color){
    
    color = color.toLowerCase();

    localStorage["theme"] = color;
    
    $scope.dynamic = localStorage["theme"];
}

$scope.johnny = [
    
    {quote: "Don't Even Ask", path: 'sounds/DontEventAsk.mp3'},
    {quote: "Anything For My Princess", path: 'sounds/AnythingForMyPrincess.mp3'},
    {quote: "Don't Plan Too Much", path: 'sounds/DontPlanTooMuch.mp3'},
    {quote: "Don't Touch Me", path: "sounds/DontTouchMe.mp3"},
    {quote: "Everybody Betrayed Me", path: 'sounds/EverybodyBetrayMe.mp3'},
    {quote: "God, Forgive Me", path: 'sounds/GodForgiveMe.mp3'},
    {quote: "Good Thinking", path: 'sounds/GoodThinking.mp3'},
    {quote: "Hi Doggie", path: 'sounds/HiDoggie.mp3'},
    {quote: "How Could You Do This", path: 'sounds/HowCouldYouDoThisToMe.mp3'},
    {quote: "How Could You Love Him", path: 'sounds/HowCouldYouLoveHim.mp3'},
    {quote: "How Dare You Talk To Me", path: 'sounds/HowDareYouTalkToMe.mp3'},
    {quote: "How's your Sex Life", path: "sounds/AnywayHowsYourSexLife.mp3"},
    {quote: "I Did NAT Hit Her", path: 'sounds/IDidNotHitHer.mp3'},
    {quote: "I Fed Up With This World", path: 'sounds/FedUpWithThisWorld.mp3'},
    {quote: "In A Few Minutes Bitch", path: 'sounds/InAFewMinutesBitch.mp3'},
    {quote: "(Incomprehensible)", path: 'sounds/Unintelligible.mp3'},
    {quote: "It Tastes Good", path: 'sounds/ItTastesGood.mp3'},
    {quote: "I'm Tired, I'm Wasted", path: 'sounds/TiredWasted.mp3'},
    {quote: "Just A Chicken", path: 'sounds/JustAChickenCheep.mp3'},
    {quote: "(Laugh)", path: 'sounds/Laugh_1.mp3'},
    {quote: "(Laugh #2)", path: 'sounds/Laugh_2.mp3'},
    {quote: "(Laugh #3)", path: 'sounds/Laugh_3.mp3'},
    {quote: "Love is Blind", path: 'sounds/LoveIsBlind.mp3'},
    {quote: "My Best Friend", path: 'sounds/BestFriend_2.mp3'},
    {quote: "Nice Tux", path: 'sounds/NiceTux.mp3'},
    {quote: "Oh Hai Denny", path: 'sounds/OhHiDenny.mp3'},
    {quote: "Oh Hai Denny #2", path: 'sounds/OhHiDenny_2.mp3'},
    {quote: "Oh Hai Denny #3", path: 'sounds/OhHiDenny_3.mp3'},
    {quote: "Oh Hai Mark", path: 'sounds/OhHiMark.mp3'},
    {quote: "Oh Hai Peter", path: 'sounds/OhHeyPeter.mp3'},
    {quote: "(Scream)", path: 'sounds/Eaaaaugh.mp3'},
    {quote: "Tearing Me Apart", path: 'sounds/TearingMeApartLisa.mp3'},
    {quote: "That's The Idea", path: 'sounds/ThatsTheIdea.mp3'},
    {quote: "That's The Idea #2", path: 'sounds/ThatsTheIdea_2.mp3'},
    {quote: "They Can Feel It", path: 'sounds/TheyCanFeelIt.mp3'},
    {quote: "Treat You Like A Princess", path: 'sounds/TreatYouLikeAPrincess.mp3'},
    {quote: "We're Expecting", path: 'sounds/WereExpecting.mp3'},
    {quote: "Why, Lisa Why?", path: 'sounds/WhyWhyLisa.mp3'},
    {quote: "You Look Baby Face", path: 'sounds/BabyFace.mp3'},
    {quote: "You Must Be Crazy", path: 'sounds/YouMustBeCrazy.mp3'},
    {quote: "You Must Be Kidding", path: 'sounds/YouMustBeKidding.mp3'},
    
    //1.3 sounds
    
    {quote: 'Three\'s A Crowd', path: 'sounds/1.3/2isgreatbut3sacrowdhuhhuh.mp3' },
    {quote: 'Future Wife', path: 'sounds/1.3/afterallshesmyfuturewife.mp3' },
    {quote: 'I Am The Fool', path: 'sounds/1.3/andiamthefool.mp3' },
    {quote: "(Very) Interesting Story", path: 'sounds/1.3/thatshowwemet.mp3'},
    {quote: 'I Love Lisa So Much', path: 'sounds/1.3/andilovelisasomuch.mp3' },
    {quote: 'But You\'re A Psychologist', path: 'sounds/1.3/butyouarepsychologist.mp3' },
    {quote: 'Bye Denny', path: 'sounds/1.3/byedanny.mp3' },
    {quote: 'Can You Merry Me?', path: 'sounds/1.3/canyoumarrymehahaha.mp3' },
    {quote: 'Don\'t Talk Like That', path: 'sounds/1.3/donttalklikethat.mp3' },
    {quote: 'Don\'t Worry About It', path: 'sounds/1.3/dontworryaboutit.mp3' },
    {quote: 'Don\'t Worry About It #2', path: 'sounds/1.3/dontworryaboutit2.mp3' },
    {quote: 'Don\'t Worry About That', path: 'sounds/1.3/dontworryaboutthat.mp3' },
    {quote: 'Do You Understand Life?', path: 'sounds/1.3/doyouunderstandlife.mp3' },
    {quote: 'Get Out of My Life', path: 'sounds/1.3/getoutgetoutgetout.mp3' },
    {quote: 'Get Out of My House', path: 'sounds/1.3/getoutofmyhouse.mp3' },
    {quote: 'Girl Trouble, I Guess', path: 'sounds/1.3/girltroubleiguess.mp3' },
    {quote: 'He\'s Cranky Today', path: 'sounds/1.3/hescrankytoday.mp3' },
    {quote: 'Hi Babe', path: 'sounds/1.3/hi_babe.mp3' },
    {quote: 'How Can They Say This', path: 'sounds/1.3/howcantheysaythisaboutme.mp3' },
    {quote: 'Future Husband', path: 'sounds/1.3/iamyourfuturehusband.mp3' },
    {quote: 'I Could Not Go On', path: 'sounds/1.3/icouldnotgoonwithoutyoulisa.mp3' },
    {quote: 'Don\'t Have A Friend', path: 'sounds/1.3/idonthaveafriendintheworld.mp3' },
    {quote: 'Don\'t Understand Women', path: 'sounds/1.3/idontunderstandwomen.mp3' },
    {quote: 'Better Place To Live', path: 'sounds/1.3/ifalotofpeopleloveeachother.mp3' },
    {quote: 'I Kill You!', path: 'sounds/1.3/ikillyou.mp3' },
    {quote: 'I\'ll Record Everything', path: 'sounds/1.3/illrecordeverything.mp3' },
    {quote: 'I Love You, You Betray Me', path: 'sounds/1.3/iloveyouandwoulddoanything.mp3' },
    {quote: 'You Should Leave', path: 'sounds/1.3/Ithinkyoushouldleave.mp3' },
    {quote: 'Take Her Up On It', path: 'sounds/1.3/ithoughtiwouldtakeheruponit.mp3' },
    {quote: 'I Trust You', path: 'sounds/1.3/itrustyouanditrustlisa.mp3' },
    {quote: 'I\'ve Something', path: 'sounds/1.3/Ive_something_for_you.mp3' },
    {quote: 'I Will Help You', path: 'sounds/1.3/keepinmind_Iwillhelpyou.mp3' },
    {quote: 'Let\'s Go Eat, Huh?', path: 'sounds/1.3/letsgoeathuh.mp3' },
    {quote: 'Let\'s Go Home', path: 'sounds/1.3/letsgohomedanny.mp3' },
    {quote: 'Lisa Loves You', path: 'sounds/1.3/lisalovesyoutoo.mp3' },
    {quote: 'Do You Remember?', path: 'sounds/1.3/markdoyouremembertheone.mp3' },
    {quote: 'Maybe I Know More', path: 'sounds/1.3/maybeiknowmorethanyouthink.mp3' },
    {quote: 'My Lisa Is Great', path: 'sounds/1.3/mylisasgreatwhenicangetit.mp3' },
    {quote: 'Not Always', path: 'sounds/1.3/notalways.mp3' },
    {quote: 'What Do You Think?', path: 'sounds/1.3/ofcoursewhatdoyouthink.mp3' },
    {quote: 'Okay', path: 'sounds/1.3/okay.mp3' },
    {quote: 'Everything\'s Fine', path: 'sounds/1.3/okayfolksevertythingisfine.mp3' },
    {quote: 'Play Psychologist', path: 'sounds/1.3/peter_psychologist.mp3' },
    {quote: 'Please Talk To Me', path: 'sounds/1.3/pleasetalktomeplease.mp3' },
    {quote: 'She Paid For Dinner', path: 'sounds/1.3/shepaidfordinner.mp3' },
    {quote: 'Shoot, Denny', path: 'sounds/1.3/shootdanny.mp3' },
    {quote: 'Give Me Orders?', path: 'sounds/1.3/sincewhendoyougivemeorders.mp3' },
    {quote: 'Invited All My Friends', path: 'sounds/1.3/thankyouhollythisis.mp3' },
    {quote: 'That\'s Me', path: 'sounds/1.3/thatsme.mp3' },
    {quote: 'That\'s Too Bad', path: 'sounds/1.3/thatstoobad.mp3' },
    {quote: 'Say What They Mean', path: 'sounds/1.3/theyneversaywhattheymean.mp3' },
    {quote: 'They Crazy', path: 'sounds/1.3/theyrecrazy.mp3' },
    {quote: '(Uhuhuhuuhuhh)', path: 'sounds/1.3/uhhuhuhhuhahhuh.mp3' },
    {quote: 'Part of Our Family', path: 'sounds/1.3/urpartoffamilyandweluvu.mp3' },
    {quote: 'Make Love In A While', path: 'sounds/1.3/wedidntmakeloveinawhile.mp3' },
    {quote: 'Well, We\'ll Seeee', path: 'sounds/1.3/wellwellsee.mp3' },
    {quote: 'Well, What Happened?', path: 'sounds/1.3/wellwhathappened.mp3' },
    {quote: 'Talking About Women', path: 'sounds/1.3/werejusttalkingaboutwomen.mp3' },
    {quote: 'What\'s Going On Here?', path: 'sounds/1.3/whatareyoudoingwhatsgoinon.mp3' },
    {quote: 'Makes You Say That?', path: 'sounds/1.3/whatmakesyousaythat.mp3' },
    {quote: 'What\'s Bovering You?', path: 'sounds/1.3/whatsbotheringyoumark.mp3' },
    {quote: 'Why?', path: 'sounds/1.3/why.mp3' },
    {quote: 'Why Did You Do This?', path: 'sounds/1.3/whydidyoudothis.mp3' },
    {quote: 'Woah', path: 'sounds/1.3/woah.mp3' },
    {quote: 'You Look Sexy Lisa', path: 'sounds/1.3/wowyoulooksosexylisa.mp3' },
    {quote: 'Yeah', path: 'sounds/1.3/yeah.mp3' },
    {quote: 'Stupid Mother', path: 'sounds/1.3/youandyourstupidmother.mp3' },
    {quote: 'Part of My Life', path: 'sounds/1.3/youarepartofmylife.mp3' },
    {quote: 'Sortlth Like Her Son', path: 'sounds/1.3/youaresortalikeherson.mp3' },
    {quote: 'You Betray Me', path: 'sounds/1.3/youbetrayedmeyou.mp3' },
    {quote: 'Nothing Wrong With It', path: 'sounds/1.3/youcanlovesomeonedeep.mp3' },
    {quote: 'Drive Me Crazy', path: 'sounds/1.3/youdrivemecrazy.mp3' },
    {quote: 'You Know Better', path: 'sounds/1.3/youknowbetterright.mp3' },
    {quote: 'You Little Tramp', path: 'sounds/1.3/youlittletramp.mp3' },
    {quote: 'You\'re The Expert', path: 'sounds/1.3/youretheexpert_mark.mp3' },
    {quote: 'Tell Me Everything', path: 'sounds/1.3/youshouldtellmeeverything.mp3' },
    {quote: 'Think About Everything', path: 'sounds/1.3/youthinkabouteverythinghuhu.mp3' },
    {quote: 'What A Story Mark', path: 'sounds/1.3/whatastorymark.mp3' },
    {quote: 'That Son of A Bitch', path: 'sounds/1.3/thatsonofabitch.mp3'}
    //When adding new sounds - UPDATE JSON COLLECTION
];

$scope.johnny.sort(function(a, b){
    a = a.quote.replace(/\(|\)/g, '');
    b = b.quote.replace(/\(|\)/g, '');
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
});

$scope.lisa = [
    {quote: "Don't Worry", path: 'sounds/DontWorry.mp3'},
    {quote: "Everything Will Be Alright", path: 'sounds/EverythingWillBeAllRight.mp3'},
    {quote: "Everything Will Be Fine", path: 'sounds/EverythingWillBeFine.mp3'},
    {quote: "You Owe Me One #1", path: 'sounds/OweMeOne_1.mp3'},
    {quote: "You Owe Me One #2", path: 'sounds/OweMeOne_2.mp3'},
    {quote: "(Pizza Order)", path: 'sounds/PizzaOrder.mp3'},
    {quote: "I Already Ordered A Pizza", path: 'sounds/AlreadyOrderedAPizza.mp3'},
    {quote: "Don't Want To Talk... #1", path: 'sounds/DontWantToTalk_1.mp3'},
    {quote: "Don't Want To Talk... #2", path: 'sounds/DontWantToTalk_2.mp3'},
    {quote: "Don't Want To Talk... #3", path: 'sounds/DontWantToTalk_3.mp3'},
    {quote: "Don't Want To Talk... #4", path: 'sounds/DontWantToTalk_4.mp3'},
    {quote: "Don't Want To Talk... #5", path: 'sounds/DontWantToTalk_5.mp3'},
    {quote: "Lover Boy", path: 'sounds/LoverBoy.mp3'},
    {quote: "To Make it Interesting", path: 'sounds/MakeItInteresting.mp3'},
    {quote: "There is No Baby", path: 'sounds/ThereIsNoBaby.mp3'},
    {quote: "What Kind of Drugs #1", path: 'sounds/WhatKindOfDrugs.mp3'},
    {quote: "What Kind of Drugs #2", path: 'sounds/WhatKindofDrugsDenny.mp3'},
    {quote: "What Kind of Money", path: 'sounds/WhatKindOfMoney.mp3'},
    {quote: "What is Wrong With You", path: 'sounds/WhatTheHellIsWrongWithYou.mp3'}
];

$scope.mark = [
    {quote: "Comments in Your Pocket", path: 'sounds/LeaveYourCommentsPocket.mp3'},
    {quote: "I Just Saw You", path: 'sounds/IJustSawYou.mp3'},
    {quote: "I'm Very Busy", path: 'sounds/ImVeryBusy.mp3'},
    {quote: "Oh, Hey Peter", path: 'sounds/OhHeyPeter2.mp3'},
    {quote: "The Interesting Part?", path: 'sounds/WhatsTheInterestingPart.mp3'},
    {quote: "Johnny's My Best Friend", path: 'sounds/BestFriend_1.mp3'},
];

$scope.denny = [
    {quote: "I Just Like To Watch", path: 'sounds/IJustLikeToWatch.mp3'},
    {quote: "She's Beautiful", path: 'sounds/ShesBeautiful.mp3'},
    {quote: "Stop Ganging Up On Me", path: 'sounds/StopGangingUpOnMe.mp3'},
    {quote: "Not My F*cking Mother", path: 'sounds/YoureNotMyFuckingMother.mp3'},
    
];

$scope.lisasmom = [
    {quote: "A Man Like That", path: 'sounds/AManLikeThat.mp3'},
    {quote: "Have A Kitchen?", path: 'sounds/HaveAKitchen.mp3'},
    {quote: "If You Think I'm Tired", path: 'sounds/IfYouThinkImTiredToday.mp3'},
    {quote: "It Matters A Great Deal", path: 'sounds/ItMattersAGreatDeal.mp3'},
    {quote: "Breast Cancer", path: 'sounds/BreastCancer.mp3'},
    {quote: "Everything Will Be Ok", path: 'sounds/EverythingWillBeAllOk.mp3'},
];

$scope.chicken = [
    {quote: "Cheep #1", path: 'sounds/Cheep_1.mp3'},
    {quote: "Cheep #2", path: 'sounds/Cheep_2.mp3'},
];

$scope.chris = [
    {quote: "You Want 5 Minutes?!", path: 'sounds/YouWant5Minutes.mp3'}
];

$scope.flower = [
    {quote: "Oh, Hi Johnny", path: 'sounds/OhHiJohnny.mp3'},
    {quote: "My Favourite Customer", path: 'sounds/FavoriteCustomer.mp3'},
];

$scope.mike = [
    {quote: "Me Underwears", path: 'sounds/MeUnderwears.mp3'},
];

$scope.steven = [
    {quote: "Atomic Bomb", path: 'sounds/AtomicBomb.mp3'},
    {quote: "How Can You Do This?", path: 'sounds/HowCanYouDoThis.mp3'},
    {quote: "When's The Baby Due?", path: 'sounds/WhenIsTheBabyDue.mp3'},
    {quote: "You Make Me Sick", path: 'sounds/YouMakeMeSick.mp3'},
];

$scope.totalSounds = $scope.johnny.length + $scope.lisa.length + 
                    $scope.mark.length + $scope.denny.length + 
                    $scope.lisasmom.length + $scope.chicken.length + 
                    $scope.chris.length + $scope.flower.length + 
                    $scope.mike.length + $scope.steven.length;

$scope.totalNames = [$scope.johnny, $scope.lisa, $scope.mark, $scope.denny, $scope.lisasmom, 
                    $scope.chicken, $scope.chris, $scope.flower, $scope.mike, $scope.steven] //if this is changed / change payRandom!

$scope.stats = [];

//Method to push if only unique item
Array.prototype.pushUnique = function (item){
    if(this.indexOf(item) == -1) {
        this.push(item);
    }
}

//Makes sure every list has a value
for (var i = 0; i < $scope.totalNames.length; i++) {
    var list = $scope.totalNames[i];
    for (var j = 0; j < list.length; j++) {
        var quote = list[j].quote;
        if (typeof localStorage[quote] == "undefined") {
            localStorage[quote] = 0;
        }
        $scope.stats.pushUnique({quote:quote, value: Number(localStorage[quote])});
        localStorage["stats"] = JSON.stringify($scope.stats);
        
    }
}

if (typeof localStorage["total"] == "undefined") {
    localStorage["total"] = 0;
}


$scope.totalPlays = localStorage["total"];

//updates total (local) stats
$scope.updateTotal = function(list) {
    var total = 0;
    for(var i = 0; i < list.length; i++) {
        var current = list[i].value;
        total += list[i].value;
        localStorage["total"] = total;

    }
    $scope.totalPlays = localStorage["total"];
}

$scope.updateTotal($scope.stats);


//sorts list from value property
$scope.stats.sort(function(a, b){
    return b.value - a.value;
});


//Sound allocation and initialization
$scope.getPhoneGapPath = function(){

    var path = window.location.pathname;
    path = path.substr( 0, path.length - 10 );
    return 'file://' + path;
};
//index of object from key and value
$scope.arrayObjectIndexOf = function(myArray, property, searchTerm){
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

//play fnct for normal buttons
$scope.play = function(path, char){
    var quote = char;
    var os = navigator.platform;
    if (monaca.isIOS){
        var url = path;
        var my_media = new Media(url);
    }
    else{
        var my_media = document.createElement('audio');
        my_media.src = path;
        
    }

    // Play audio
    my_media.play();
    
    //local stats
    var index = $scope.arrayObjectIndexOf(JSON.parse(localStorage["stats"]), "quote",quote);
    
    localStorage[quote] = Number(localStorage[quote]) + 1;
    
    $scope.stats = JSON.parse(localStorage["stats"]);
    
    $scope.stats[index]['value'] = Number(localStorage[quote]);
    
    localStorage["stats"] = JSON.stringify($scope.stats);
    
    $scope.stats.sort(function(a, b){
        return b.value - a.value;
    });
    
    //update total local stats
    $scope.updateTotal($scope.stats);
    
    //update global stats
    $scope.updateStats(quote);


}
    
//play fnct for random buttons
$scope.playRandom = function(character){

    if (character == 'random') {
        var randChar = Math.floor(Math.random() * 6);
        if (randChar == 5) {
            randChar = Math.floor((Math.random() * 5) + 5)
        }
        character = $scope.totalNames[randChar];
    }
    
    var max = character.length - .01;
    var obj = character[Math.floor(Math.random()*max)];
    var path = obj.path;
    var quote = obj.quote;
    var os = navigator.platform;
    if (monaca.isIOS){
        var url = path;
        var my_media = new Media(url);
    }
    else{
        var my_media = document.createElement('audio');
        my_media.src = path;
    }
    
    // Play audio
    my_media.play();
    
    var index = $scope.arrayObjectIndexOf(JSON.parse(localStorage["stats"]), "quote",quote);
    
    localStorage[quote] = Number(localStorage[quote]) + 1;
    
    $scope.stats = JSON.parse(localStorage["stats"]);
    
    $scope.stats[index]['value'] = Number(localStorage[quote]);
    
    localStorage["stats"] = JSON.stringify($scope.stats);
    
    $scope.stats.sort(function(a, b){
        return b.value - a.value;
    });
    
    //update total local stats
    $scope.updateTotal($scope.stats);
    
    //update global stats
    $scope.updateStats(quote); 
    
    my_media = null;
}

//declaration and definition of fav list
$scope.fav = [];

if (typeof localStorage["fav"] !== "undefined") {
   $scope.fav = JSON.parse(localStorage["fav"]);
}
//contains object in list function
$scope.containsObject = function(obj, list) {
    var i;
    if (list.length > 0) {
        for (i = 0; i < list.length; i++) {
            if (angular.equals(list[i], obj)) {
                return true;
            }
        }
    }

    return false;
};

//contains object index funciton
$scope.containsObjectIndex = function(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (angular.equals(list[i], obj)) {
            return i;
        }
    }
    return -1;
};

//main funciton
$scope.addToFav = function(q, p) {   
    navigator.notification.vibrate(50);
    //checks if obj is in fav
    if ($scope.containsObject({quote: q, path: p}, $scope.fav) == false) {
        //adds obj to fav
        $scope.fav.push({quote: q, path: p});
        //saves fav in localStorage
        localStorage["fav"] = JSON.stringify($scope.fav);
        
        //$scope.fav = JSON.parse(localStorage["fav"]); 
        //alert('"' + q + '"' + " was added to favourites");
        $scope.$apply();
    } else {
        //removes item from fav
        $scope.fav.splice($scope.containsObjectIndex({quote: q, path: p}, $scope.fav), 1);
        //updates fav localStorage
        localStorage["fav"] = JSON.stringify($scope.fav);
        
        //$scope.fav = JSON.parse(localStorage["fav"]);
        //alert('"' + q + '"' + " was removed from favourites");
        //updates live list
        
        $scope.$apply();
    }
};
//checks if specific button is in fav
$scope.isFav = function(q, p) {
    return $scope.containsObject({quote: q, path: p}, $scope.fav);
    
}

var request;
//updates global stats
$scope.updateStats = function(quote) {
            // abort any pending request
        if (request) {
            request.abort();
        }

        // serialize the data in the form
        //$form.serialize();
        var serializedData = "quote=" + quote;
        // fire off the request to /form.php
        request = $.ajax({
                url: "https://script.google.com/macros/s/AKfycbwVFD8-b_0gklvow97_ixKhGrGN7mhydz0f90VllUPw63K5K-Sw/exec?",
                type: "post",
                data: serializedData
            });
    
        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // log a message to the console
            
        });
    
        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
        });
    
}
//reloads stats collection

$scope.globalStatsLoad = false;
$scope.totalGlobalPlays = 0;
$scope.reloadStats = function(){
    
    $scope.internetConnection = navigator.onLine;
    $scope.globalStatsLoad = true;
    var list = [];
    
    $.getJSON("https://spreadsheets.google.com/feeds/list/1miuSCXrSvjJQPXscBOgunzBX0veoApFqVFGx5jqIRnQ/od6/public/values?alt=json", function(data) {
         //gets JSON objects 
         
        for (i = 0; i < data.feed.entry.length - 1; i++) {    
            list.push({quote: data.feed.entry[i]['gsx$quote']['$t'], plays: data.feed.entry[i]['gsx$plays']['$t']});
        }
            list.sort(function(a, b){
               return b.plays - a.plays;
            });
        
             $scope.globalStatistics = list;
             $scope.globalStatsLoad = false;
             $scope.totalGlobalPlays = data.feed.entry[data.feed.entry.length - 1]['gsx$plays']['$t'];
            $scope.$apply();
    });
};

//FIREBASE
var listRef = new Firebase("https://the-room-soundboard.firebaseio.com/");
var userRef = listRef.push();

// Add ourselves to presence list when online.
var presenceRef = new Firebase("https://the-room-soundboard.firebaseio.com/.info/connected");
presenceRef.on("value", function(snap) {
  if (snap.val()) {
    userRef.set(navigator.platform + " | " + navigator.language + " | " + $scope.totalPlays);
    // Remove ourselves when we disconnect.
    userRef.onDisconnect().remove();
    $scope.updateUsersOnline(snap.numChildren());
  }
});

// updates number of online users in the presence list.
listRef.on("value", function(snap) {
    $scope.updateUsersOnline(snap.numChildren());
});    

$scope.updateUsersOnline = function(number) {
    if (Number(number) > 1) {
        $scope.usersOnline = number;
    } else if (Number(number) >= 50){
        $scope.usersOnline = number + "+";
    } else {
        $scope.usersOnline = null;
    }
    $scope.$apply();
}

$scope.currentDate = new Date();

}]);

