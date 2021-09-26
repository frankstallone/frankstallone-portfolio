/*
A pWidgets Bit...
website: www.pwidgets.com
*/


pWidgetsFOID = new Object();
pWidgetsFTID = new Object();

function pWidgets(object, destOp, rate, delta){
if (!document.all)
return
    if (object != "[object]"){
        setTimeout("pWidgets("+object+","+destOp+","+rate+","+delta+")",0);
        return;
    }
        
    clearTimeout(pWidgetsFTID[object.sourceIndex]);
    
    diff = destOp-object.filters.alpha.opacity;
    direction = 1;
    if (object.filters.alpha.opacity > destOp){
        direction = -1;
    }
    delta=Math.min(direction*diff,delta);
    object.filters.alpha.opacity+=direction*delta;

    if (object.filters.alpha.opacity != destOp){
        pWidgetsFOID[object.sourceIndex]=object;
        pWidgetsFTID[object.sourceIndex]=setTimeout("pWidgets(pWidgetsFOID["+object.sourceIndex+"],"+destOp+","+rate+","+delta+")",rate);
    }
}