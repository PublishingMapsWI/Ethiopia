var size = 0;

var styleCache_AFVP23={}
var style_AFVP23 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})})
    })];
    key = value + "_" + labelText
    if (!styleCache_AFVP23[key]){
        var text = new ol.style.Text({
                font: '10px, sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_AFVP23[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_AFVP23[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};