var size = 0;

var styleCache_Woredas0={}
var style_Woredas0 = function(feature, resolution){
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
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,0.886275)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,244,199,0.886275)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_Woredas0[key]){
        var text = new ol.style.Text({
                font: '13.0px \'Noto Sans\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Woredas0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Woredas0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};