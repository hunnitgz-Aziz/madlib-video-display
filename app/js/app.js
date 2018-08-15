var dragresize = new DragResize('dragresize',
 { minWidth: 50, minHeight: 50, minLeft: 20, minTop: 20, maxLeft: 1200, maxTop: 1200 });

dragresize.isElement = function(elm)
{
 if (elm.className && elm.className.indexOf('drag-and-resize') > -1) return true;
};
dragresize.isHandle = function(elm)
{
 if (elm.className && elm.className.indexOf('drsMoveHandle') > -1) return true;
};

dragresize.apply(document);