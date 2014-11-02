var massElem = new Array(16);
var massMenu = new Array(9);
var clearElemId = 0; // Id ���������� ��������
var time = 0; // ��������� ����� � ������ ����
var steps = 0;
var widthSquare = 137;
var heightSquare = 137;
var intervalId = 0;// ��� ����������� �������
var pictN = 0;// ����� ������ ��������

function getElem()// �������� ������� html
{
	for(i = 0; i < 16; ++i)
		massElem[i] = document.getElementById("s"+(i+1));
	for(i = 0; i < 9; ++i)
		massMenu[i] = document.getElementById("m"+(i+1));
}

function showMenu()
{
	clearGame();
	for(i = 0; i < 16; ++i)
		massElem[i].style.display = "none";
	document.getElementById("timeDiv").style.display = "none";
	document.getElementById("stepsDiv").style.display = "none";
	document.getElementById("backB").style.display = "none";
	document.getElementById("restB").style.display = "none";
	document.getElementById("sampleB").style.display = "none";
	document.getElementById("stepsP").style.display = "none";
	document.getElementById("timeP").style.display = "none";
	for(i = 0; i < 9; ++i)
		massMenu[i].style.display = "block";
}

function hideMenu()
{
	document.getElementById("timeDiv").style.display = "block";
	document.getElementById("stepsDiv").style.display = "block";
	document.getElementById("backB").style.display = "block";
	document.getElementById("restB").style.display = "block";
	document.getElementById("sampleB").style.display = "block";
	document.getElementById("stepsP").style.display = "block";
	document.getElementById("timeP").style.display = "block";
	for(i = 0; i < 9; ++i)
		massMenu[i].style.display = "none";
}

function arrangement()// ��������� ������� ���������
{
	// ��� ���������
	var left = 0;
	var top = 0;
	for(i = 1; i <= 16; ++i)
	{
		massElem[i - 1].style.left = left+"px";
		massElem[i - 1].style.top = top+"px";
		massElem[i - 1].value = " ";
		left += widthSquare;		
		if(i % 4 == 0)
		{
			left = 0;
			top += heightSquare;
		}
	}
	
	// ��� ����
	left = 35;
	top = 0;
	for(i = 1; i <= 9; ++i)
	{
		massMenu[i - 1].style.left = left+"px";
		massMenu[i - 1].style.top = top+"px";
		massMenu[i - 1].style.backgroundImage = "url(img/pictOfMenu/"+i+"off.png)";
		left += 170;
		if(i % 3 == 0)
		{
			left = 35;
			top += 170;
		}
	}
}

function load()// �������� ��� �������� �������� 
{
	resize();
	getElem();
	arrangement();
	showMenu();
}

function newGame(num)
{
	pictN = num;// ����� ������ ��������
	clearGame();//����� ���������� � �������
	hideMenu();

	//����� ���� ������
	for(i = 0; i < 16; ++i)
	{
		massElem[i].style.display = "block"
	}

	// �������������
	var virtField = new Array(16);
	var virtCleadId = 15;
	for(i = 0; i < 16; ++i)// ���������� ������������ ����
	{
		virtField[i] = i + 1;
	}
	virtField[15] = 0;
	var virtIdS = 0;
	for(i = 0; i < 10000; ++i)// �������� �����
	{
		virtIdS = Math.floor(Math.random() * 16);// ���� �� �������
		
		var virtRowIdS = Math.floor(virtIdS / 4);// ������ ��������� ��������
		var virtColIdS = virtIdS - (virtRowIdS * 4);// ������� ��������� ��������
		var virtRowClearId = Math.floor(virtCleadId / 4);// ������ ���������� ��������
		var virtColClearId = virtCleadId - (virtRowClearId * 4);// ������� ���������� ��������
		
		if(virtRowIdS == virtRowClearId)
		{
			var distance = virtIdS - virtCleadId;
			if(distance == 1 || distance == -1)
			{
				var valueClickS = virtField[virtIdS];// �������� �������� ������� ������
				virtField[virtCleadId] = valueClickS;// �������� ��������� �������� �������
				virtField[virtIdS] = 0;// ������� ������� ������
				virtCleadId = virtIdS;// ������� ���������� ������� ������
			}
		}
		else if(virtColIdS == virtColClearId)
		{
			var distance = virtIdS - virtCleadId;
			if(distance == 4 || distance == -4)
			{
				var valueClickS = virtField[virtIdS];// �������� �������� ������� ������
				virtField[virtCleadId] = valueClickS;// �������� ��������� �������� �������
				virtField[virtIdS] = 0;// ������� ������� ������
				virtCleadId = virtIdS;// ������� ���������� ������� ������
			}
		}
	}
	clearElemId = virtCleadId;
	massElem[clearElemId].value = 0;// ��������� ������� ������
	massElem[clearElemId].style.display = "none";// ������� ������
	
	// ���������� �������� ����
	for(i = 0; i < 16; ++i)
	{
		if(i == clearElemId)
			continue;
		var pictPath = "url(img/pict"+pictN+"/p"+virtField[i]+".png)";
		massElem[i].value = virtField[i];// ����������� ����� �� ������
		massElem[i].style.backgroundImage = pictPath;// ����������� ������� �� ������
	}
	
	intervalId = setInterval(showTime, 1000);// ������ ������� ������� ����
}

function clickSquare(idS)// ������� �� �����
{
	--idS;// ������ �������� � ����
	
	var rowIdS = Math.floor(idS / 4);// ������ ��������� ��������
	var colIdS = idS - (rowIdS * 4);// ������� ��������� ��������
	
	var rowClearId = Math.floor(clearElemId / 4);// ������ ���������� ��������
	var colClearId = clearElemId - (rowClearId * 4);// ������� ���������� ��������
	
	if(rowIdS == rowClearId)
	{
		var distance = idS - clearElemId;
		if(distance == 1 || distance == -1)
		{
			++steps;
			showSteps();
			
			var valueClickS = massElem[idS].value;// �������� �������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[idS].value = 0;// ������� ������� ������
			massElem[idS].style.display = "none"// ������ ������� ������
			clearElemId = idS;// ������� ���������� ������� ������
			
		}
		else if(distance == 2 || distance == -2)
		{
			var elemM1Id;
			if(distance == 2)
				elemM1Id = idS - 1;
			if(distance == -2)
				elemM1Id = idS + 1;
				
			++steps;
			showSteps();
			
			var valueClickS = massElem[elemM1Id].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[elemM1Id].value = 0;// ������� ������� ������
			massElem[elemM1Id].style.display = "none"// ������ ������� ������
			clearElemId = elemM1Id;// ������� ���������� ������� ������
			
			var valueClickS = massElem[idS].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[idS].value = 0;// ������� ������� ������
			massElem[idS].style.display = "none"// ������ ������� ������
			clearElemId = idS;// ������� ���������� ������� ������
		}
		else if(distance == 3 || distance == -3)
		{
			var elemM1Id;
			if(distance == 3)
				elemM1Id = idS - 2;
			if(distance == -3)
				elemM1Id = idS + 2;
				
			var elemM2Id;
			if(distance == 3)
				elemM2Id = idS - 1;
			if(distance == -3)
				elemM2Id = idS + 1;
				
			++steps;
			showSteps();
			
			var valueClickS = massElem[elemM1Id].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[elemM1Id].value = 0;// ������� ������� ������
			massElem[elemM1Id].style.display = "none"// ������ ������� ������
			clearElemId = elemM1Id;// ������� ���������� ������� ������
			
			var valueClickS = massElem[elemM2Id].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[elemM2Id].value = 0;// ������� ������� ������
			massElem[elemM2Id].style.display = "none"// ������ ������� ������
			clearElemId = elemM2Id;// ������� ���������� ������� ������
			
			var valueClickS = massElem[idS].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[idS].value = 0;// ������� ������� ������
			massElem[idS].style.display = "none"// ������ ������� ������
			clearElemId = idS;// ������� ���������� ������� ������
		}
	}
	else if(colIdS == colClearId)
	{
		var distance = idS - clearElemId;
		if(distance == 4 || distance == -4)
		{
			++steps;
			showSteps();
			
			var valueClickS = massElem[idS].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[idS].value = 0;// ������� ������� ������
			massElem[idS].style.display = "none"// ������ ������� ������
			clearElemId = idS;// ������� ���������� ������� ������
		}
		else if(distance == 8 || distance == -8)
		{
			var elemM1Id;
			if(distance == 8)
				elemM1Id = idS - 4;
			if(distance == -8)
				elemM1Id = idS + 4;
				
			++steps;
			showSteps();
			
			var valueClickS = massElem[elemM1Id].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[elemM1Id].value = 0;// ������� ������� ������
			massElem[elemM1Id].style.display = "none"// ������ ������� ������
			clearElemId = elemM1Id;// ������� ���������� ������� ������
			
			var valueClickS = massElem[idS].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[idS].value = 0;// ������� ������� ������
			massElem[idS].style.display = "none"// ������ ������� ������
			clearElemId = idS;// ������� ���������� ������� ������
		}
		else if(distance == 12 || distance == -12)
		{
			var elemM1Id;
			if(distance == 12)
				elemM1Id = idS - 8;
			if(distance == -12)
				elemM1Id = idS + 8;
				
			var elemM2Id;
			if(distance == 12)
				elemM2Id = idS - 4;
			if(distance == -12)
				elemM2Id = idS + 4;
				
			++steps;
			showSteps();
			
			var valueClickS = massElem[elemM1Id].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[elemM1Id].value = 0;// ������� ������� ������
			massElem[elemM1Id].style.display = "none"// ������ ������� ������
			clearElemId = elemM1Id;// ������� ���������� ������� ������
			
			var valueClickS = massElem[elemM2Id].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[elemM2Id].value = 0;// ������� ������� ������
			massElem[elemM2Id].style.display = "none"// ������ ������� ������
			clearElemId = elemM2Id;// ������� ���������� ������� ������
			
			var valueClickS = massElem[idS].value;// �������� ������� ������� ������
			massElem[clearElemId].style.display = "block";// �������� ������� ������
			massElem[clearElemId].value = valueClickS;// �������� �� �������� �������
			var pictPath = "url(img/pict"+pictN+"/p"+(valueClickS)+".png)";// �������� ����� ������� ������� ������
			massElem[clearElemId].style.backgroundImage = pictPath;// �������� ������� ������ ������� �������
			massElem[idS].value = 0;// ������� ������� ������
			massElem[idS].style.display = "none"// ������ ������� ������
			clearElemId = idS;// ������� ���������� ������� ������
		}
	}

	if(win())
	{
		alert("����������! �� �������� �� "+time+" ������ � "+steps+" �����");
		//clearGame();
		showMenu();
	}
}

function clearGame()// ������� ������ ����
{
	clearInterval(intervalId);
	steps = 0;
	time = 0;
	showTime();
	showSteps();
}

function win()// �������� �� �������
{
	var value = parseInt(massElem[15].value);
	if(value == 0)// ���� ��������� ������ �����
	{
		for(i = 0; i < 15; ++i)
		{
			value = parseInt(massElem[i].value);
			if(value != i + 1)
				return false;
		}
		return true;		
	}
	else 
		return false;
}

function resize()// ������� ���� ������ �� ������ ��������
{
	var elem = document.getElementById("content");
	var width = elem.offsetWidth;
	var left = Math.floor(document.body.clientWidth / 2) - Math.floor(width / 2);
	elem.style.left = left+"px";
}

function showTime()
{
	var elem = document.getElementById("timeP");

	//������������ �� ������
	if(time < 10)
		elem.style.left = 60+"px";
	else if(time >= 10 && time < 100)
		elem.style.left = 50+"px";
	else if(time >= 100)
		elem.style.left = 40+"px";
		
	elem.innerHTML = time;
	++time;
}

function showSteps()
{
	var elem = document.getElementById("stepsP");
	
	//������������ �� ������
	if(steps < 10)
		elem.style.left = 730+"px";
	else if(steps >= 10 && steps < 100)
		elem.style.left = 725+"px";
	else if(steps >= 100)
		elem.style.left = 720+"px";
	
	elem.innerHTML = steps;
}

function shuffle()
{
	newGame(pictN);
}

function showSample()
{
	var elem = document.getElementById("sampleDiv");
	var path = "url(img/pict"+pictN+"/p0.png)";
	elem.style.backgroundImage = path;
	elem.style.display = "block";
}

function hideSample()
{
	var elem = document.getElementById("sampleDiv");
	elem.style.display = "none";
}

// ��������� ������
function mouseOver(numPict)
{
	var path = "url(img/pictOfMenu/"+numPict+"on.png)"
	massMenu[numPict - 1].style.backgroundImage = path;
}

function mouseOut(numPict)
{
	var path = "url(img/pictOfMenu/"+numPict+"off.png)"
	massMenu[numPict - 1].style.backgroundImage = path;
}

// ��� ��������� ��� ������
var tip, mouseX, mouseY, text;

function captureCursor () 
{
	mouseX = event.clientX; 
	mouseY = event.clientY;
	displayTip();
}

function showTip(tipObject, value) 
{
	tip = tipObject;
	text = value;
	displayTip();	
}

function displayTip () 
{
	tip.style.left = mouseX+15+"px";
	tip.style.top  = mouseY+15+"px";
	tip.innerHTML = text;
	tip.style.display = "block";
}

function hideTip () 
{
		tip.style.display = "none";
}