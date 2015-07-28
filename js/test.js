$(document).ready(function(){
    $(".nav li").on('click',function() {
        $("li").removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function(){
   $('#registration-form').validate( {
       rules: {
           email: {
               required: true,
               email: true
           },
           firstName: {
               required: true,
               minlength: 2
           },
           lastName: {
               required: true,
               minlength: 2
           },
           password: {
               required: true,
               minlength: 6
           },
           confirmpassword: {
               required: true,
               minlength: 6,
               equalTo: "#password"
           },
           gender: {
               required: true
           },
           countries: {
               required: true
           }

       },
       messages: {
           email: {
               required: "Please enter your email"
           },
           firstName: {
               required: "Please enter your name"
           },
           lastName: {
               required: "Please enter your Last name"
           },
           password: {
               required: "Dont forget your password",
               minlength: "It should be at lest 6 charachters"
           },
           confirmpassword: {
               required: "Dont forget your about to confirm your password",
               minlength: "It should be at lest 6 charachters",
               equalTo: "It must be the same es password"
           },
           countries: {
               required: "Please enter your country"
           }
       }
   });
});




$(document).ready(function(){
    $.getJSON('countries.json', function(data) {
        $.each(data, function(key, val) {
            $('#countries').append('<option value="' + val + '">' + key + '</option>');
        });
    });
});


$(function() {
    $( '.button' ).on( 'click', function() {

        var panelId = $(this).attr( 'data-panelid' );

        $ ( '#' + panelId ).toggle();
    });
});

$(function() {
   $('.prom li').on('click', function() {
      $(this).siblings().toggle();
   });
});
$(function() {
    $('.prom1 li').on('click', function() {
        $(this).next().remove();
    });
});
$(function() {
    $('.prom2 li').on('click', function() {
        $(this).hide();
    });
});

//----------------------------- JS ------------------------------
var N = new Number(4000);

console.log(N.toFixed(2));

var string = "Sometimes the same is different";

console.log(string + "!!!!!");

console.log(string.charAt(string.length-1));

console.log(string.length);

console.log(string.substring(10,31));

console.log(string.indexOf("me"));

console.log(string.replace("same","is not the same"));

console.log(string.split(" "));

console.log(string[4]);


//function greet(name) {
//    return "Hello " + name;
//}

var greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Genya").toUpperCase());

//----------------------------------- ЗАМЫКАНИЯ -----------------------


var counter = (function() {
    var count = 0;

    return function() {
        return count++;
    }
}());

console.log(counter());
console.log(counter());
console.log(counter());



// ------------------------- Создание обьектов -------------------------


var person = {
    name: "Genya",
    age: 24,
    gender: "male"
};

person.userId=25252525;

console.log(person);

delete person.userId;
console.log(person);


var object = Object.create({x: 10, y: 20});
console.log(object);


console.log("i'm a lasagna hog".split("").reverse().join(""));

console.log(( window.foo || ( window.foo = "bar" ) ));

var foo = [];
foo.push(1);
foo.push(2);

console.log(foo.length);



//setTimeout('alert("Привет!")', 5000);



function User() { }

var vasya = new User();

console.log(vasya.__proto__.name = "Vasya");


var Person = {
    constructor: function(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function() {
        console.log("Hi my name " + this.name);
    }
};
var person, anotherPerson, thirdPerson;

person = Object.create(Person).constructor("john", 35, "male");
anotherPerson = Object.create(Person).constructor("Bill", 23, "male");
thirdPerson = Object.create(Person).constructor("Linda", 18, "female");

person.greet();





//setTimeout(function() {alert("Привет!")}, 5000);


//$(document).ready(function(){
//    console.log($(".scrool").offset().top);
//    $(".nav li").on('click',function(){
//        $("li").removeClass('active');
//        $(this).addClass('active');
//        if($(this).data('attr') == 'about'){
//            $('html, body').animate({
//                scrollTop: $(".scrool").offset().top
//            }, 2000);
//        }
//    });
//
//    var calculateFunc = function(){
//        return 2 + 3;
//    }
//});