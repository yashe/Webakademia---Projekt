var btnChoice = document.querySelectorAll(".menu-choice li");

var menuIcon = document.querySelector(".menu-list .menu-bg");
var menuBg = menuIcon.querySelector(".menu-img");

var arrayChoice = [];

for (var j = 0; j < btnChoice.length; j++) {
    arrayChoice.push(btnChoice[j]);
}


for (var i = 0; i < arrayChoice.length; i++) {
    arrayChoice[i].addEventListener("click", function (e) {
        e.preventDefault();
        var activeChoice = document.querySelector(".active-choice");

        if (activeChoice) {
            activeChoice.classList.remove("active-choice");
        }
        this.classList.add("active-choice");

        index = arrayChoice.indexOf(this);

       /* changeImg(menuBg, index + 1);
        changeIcon(menuIcon, index + 1);*/



        $.getJSON('js/menu.json', function (data) {
            var $htmlHeader = '';
            var $menuList = '';
            var $list = data[index];
            
            var $header = $list.name.split(" ");

            if ($header.length > 1) {
                $htmlHeader += '<span class="bold">' + $header[0] + '</span>';
                $htmlHeader += ' ' + $header[1];
            } else {
                $htmlHeader += '<span class="bold">' + $header + '</span>';
            }

            $($list.value).each(function(key, val){
        
               $menuList += '<tr>';
               $menuList += '<td><span class="bold">'+ (key + 1) +'</span>.</td>';
               $menuList += '<td>' + val.description + '</td>';
               $menuList += '<td><span class="bold">' + val.price + '</span> zł</td>';
               $menuList += '</tr>';
            });

            $(".menu-list .menu-bg").fadeIn(500, function(){
                $(this).css("background-image", $list.icon);
            });

            $(".menu-img").fadeIn(500, function(){
                $(".menu-img").css("background-image", $list.background);
            });
            
            $(".menu-header").hide().html($htmlHeader).fadeIn(500);
            $(".menu-body").hide().html($menuList).fadeIn(500);
            
        });


        /*function changeImg(img, count) {
            img.style.backgroundImage = "url(img/menu_bg_" + count + ".jpg)";
        }
        
        function changeIcon(img, count) {
            img.style.backgroundImage = "url(img/icon_" + count + ".png)";
        }*/

    });
}



