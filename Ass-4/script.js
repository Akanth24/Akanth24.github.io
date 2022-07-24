
var names=new Array();
names[0]="Jagadeesh";
names[1]="Abhi";
names[2]="Sai";
names[3]="Farhat";
names[4]="Avinash";
names[5]="veeru";
names[6]="Varun";
names[7]="Srikanth";
names[8]="Mithlesh";
names[9]="Hari";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}