var sp_top = [];
var sp_left = [];

var zind = 0;
var k = 4;
var imageName = ["fire", "water", "air", "earth", "alcohol", "lava", "stone", "sand", "glass", "sandClock", "swamp", "clay", "brick", "steam"];
var arrayWithOpenElements = [];
var elem;

function creater() {
    for (var i = 0; i < k; i++) {
        if (i % 2) {
            var tops = 100 + (i - 1) * 60;
            var left = 500;
        } else {
            var tops = 100 + i * 60;
            var left = 10;
        }
        arrayWithOpenElements.push(i);  //add to array number of element
        document.write("<span class='addStandartElement' id='span" + i + "' style='top:" + tops + ";left:" + left + "; text-align: center;background-image: url(images/" + imageName[i] + ".png);background-size: 100px;border-radius: 75px;' onmousedown='mdown(this,event)' onmouseup='mup(event)'><div style='padding-top:100px;text-transform: capitalize;font-style: italic;'>" + imageName[i] + "</div></span>");
        sp_top.push(tops);
        sp_left.push(left);
    }
}

function add(i) {
    // i = 3;
    arrayWithOpenElements.push(i);
    k++;
    var newdiv = document.createElement('span');
    newdiv.className = "addNewElement";
    newdiv.id = 'span' + i;

    var tops = i * 30;
    var left = 100;

    newdiv.style.backgroundImage = 'url(images/' + imageName[i] + '.png)';
    newdiv.style.backgroundImage.dropshadow = ' 0px 0px 15px rgba(0,0,0,1)';

    newdiv.style.backgroundSize = '100px';

    newdiv.style.top = tops;
    newdiv.style.left = left;

    newdiv.style.paddingTop = '100px';

    newdiv.style.borderRadius = '75px';

    newdiv.style.textAlign = 'center';
    newdiv.style.textTransform = 'capitalize';
    newdiv.style.fontStyle = 'italic';

    sp_top.push(tops);
    sp_left.push(left);

    var textNode = document.createTextNode(imageName[i]);	//text label

    newdiv.appendChild(textNode);
    document.body.appendChild(newdiv);

    newdiv.onmouseup = function () {
        mup(event);
    }
    newdiv.onmousedown = function () {
        mdown(this, event);
    }
}

var peretask = false; // перетаскиваем мы сейчас объект или нет
var offX, offY;

function mdown(elem, e) { // захват элемента(содержит данные по захвату элемента, содержит координаты 'x' и 'y')
    var event = e || window.event;
    if (peretask == false) { // если еще не разу не захватывался элемент
        peretask = elem; // записать идентификатор спана

        for (var i = 0; i < k; i++) {
            if (peretask.id == "span" + i) {
                offX = event.clientX - parseInt(sp_left[i]); // на сколько пикселей удалён курсор мышки от верхнего левого угла квадратика
                offY = event.clientY - parseInt(sp_top[i]);
                break;
            }
        }

        zind++;
        peretask.style.zIndex = zind;
    }
}

function drag(e) { //перетаскивание

    var event = e || window.event;  //если e = 0 то тогда будет window.event
    if (peretask != false) { // если записан идентификатор

        peretask.style.left = event.clientX - offX; // записать в координаты спана текущее положение курсора мыши с учётом удаления от верхнего левого угла
        peretask.style.top = event.clientY - offY;

        for (var i = 0; i < k; i++) {
            if (peretask.id == "span" + i) {	//0
                coordinate.innerText = "";
                //coordinate.innerText = imageName[i] + " " + sp_left[i]+" "+sp_top[i];

                sp_left[i] = peretask.style.left;
                sp_top[i] = peretask.style.top;
                check(i);

                if (k == imageName.length) {
                    coordinate.innerText = 'Game is over, you opened all element\'s';
                }
                break;
            }
        }
    }
}

function check(element) {
    var dif = 60;
    for (var i = 0; i < k; i++) {
        if (i != element) {

            if ((parseFloat(sp_left[element], 10) > (parseFloat(sp_left[i], 10) - dif)) &&
			(parseFloat(sp_left[element], 10) < (parseFloat(sp_left[i], 10)) + dif) &&
			(parseFloat(sp_top[element], 10) > (parseFloat(sp_top[i], 10) - dif)) &&
			(parseFloat(sp_top[element], 10) < (parseFloat(sp_top[i], 10)) + dif)) {

                elem = element;

                if (elem == 0 && i == 1 || elem == 1 && i == 0) {
                    newElementCreate(4);
                } else if (elem == 0 && i == 3 || elem == 3 && i == 0) {
                    newElementCreate(5);
                } else if (elem == 2 && i == 5 || elem == 5 && i == 2) {
                    newElementCreate(6);
                } else if (elem == 6 && i == 1 || elem == 1 && i == 6) {
                    newElementCreate(7);
                } else if (elem == 0 && i == 7 || elem == 7 && i == 0) {
                    newElementCreate(8);
                } else if (elem == 8 && i == 7 || elem == 7 && i == 8) {
                    newElementCreate(9);
                } else if (elem == 3 && i == 1 || elem == 1 && i == 3) {
                    newElementCreate(10);
                } else if (elem == 7 && i == 10 || elem == 10 && i == 7) {
                    newElementCreate(11);
                } else if (elem == 0 && i == 11 || elem == 11 && i == 0) {
                    newElementCreate(12);
                } else if (elem == 2 && i == 1 || elem == 1 && i == 2) {
                    newElementCreate(13);
                }
            }
        }
    }
}

function newElementCreate(NewElement) {
    onmouseup = function () {
        var checkBool = false;

        for (var j = 0; j < arrayWithOpenElements.length; j++) {
            if (arrayWithOpenElements[j] == NewElement) {
                checkBool = true;
                break;
            }
        }

        if (!checkBool) {
            add(NewElement);
        }
    }

    checkSame(NewElement);
}

function checkSame(NewElement) {
    for (var j = 0; j < arrayWithOpenElements.length; j++) {
        if (arrayWithOpenElements[j] == NewElement) {
            coordinate.innerText = 'You already opened this element ' + imageName[NewElement];
        }
    }
}

function mup(e) { // остановить перетаскивание
    var event = e || window.event;  //если e=0 то тогда будет window.event
    peretask = false; //если фалс мы не перетаскиваем
}

creater();