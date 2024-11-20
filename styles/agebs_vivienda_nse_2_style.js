var size = 0;
var placement = 'point';

var style_agebs_vivienda_nse_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_PC3");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -4.631666 && value <= -0.166150) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(147,193,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.166150 && value <= -0.116358) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(174,214,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.116358 && value <= -0.098456) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(210,232,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.098456 && value <= -0.039074) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,250,252,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.039074 && value <= 0.103779) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,234,234,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.103779 && value <= 0.332928) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,206,206,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.332928 && value <= 2.094430) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,192,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
