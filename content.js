/*for(var i = 0; i < $("[ng-show]").length-1; i++){
	var oldAttrValue = $("[ng-show]").attr("ng-show");
	oldAttrValue = "true || " + oldAttrValue;
	$("[ng-show]").attr("ng-show", oldAttrValue);
}

for(var i = 0; i < $("[ng-hide]").length-1; i++){
	var oldAttrValue = $("[ng-hide]").attr("ng-hide");
	oldAttrValue = "false || " + oldAttrValue;
	$("[ng-hide]").attr("ng-hide", oldAttrValue);
}*/
$("<style type='text/css'> .ng-hide{display: block !important;} </style>").appendTo("head");