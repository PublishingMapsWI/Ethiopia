var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Woredas0 = new ol.format.GeoJSON();
var features_Woredas0 = format_Woredas0.readFeatures(json_Woredas0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Woredas0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Woredas0.addFeatures(features_Woredas0);var lyr_Woredas0 = new ol.layer.Vector({
                source:jsonSource_Woredas0, 
                style: style_Woredas0,
                title: '<img src="styles/legend/Woredas0.png" /> Woredas'
            });var format_TAMASA1 = new ol.format.GeoJSON();
var features_TAMASA1 = format_TAMASA1.readFeatures(json_TAMASA1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMASA1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TAMASA1.addFeatures(features_TAMASA1);var lyr_TAMASA1 = new ol.layer.Vector({
                source:jsonSource_TAMASA1, 
                style: style_TAMASA1,
                title: '<img src="styles/legend/TAMASA1.png" /> TAMASA'
            });var format_SHL2 = new ol.format.GeoJSON();
var features_SHL2 = format_SHL2.readFeatures(json_SHL2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHL2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SHL2.addFeatures(features_SHL2);var lyr_SHL2 = new ol.layer.Vector({
                source:jsonSource_SHL2, 
                style: style_SHL2,
                title: '<img src="styles/legend/SHL2.png" /> SHL'
            });var format_SBN3 = new ol.format.GeoJSON();
var features_SBN3 = format_SBN3.readFeatures(json_SBN3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBN3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SBN3.addFeatures(features_SBN3);var lyr_SBN3 = new ol.layer.Vector({
                source:jsonSource_SBN3, 
                style: style_SBN3,
                title: '<img src="styles/legend/SBN3.png" /> SBN'
            });var format_S2F4 = new ol.format.GeoJSON();
var features_S2F4 = format_S2F4.readFeatures(json_S2F4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2F4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_S2F4.addFeatures(features_S2F4);var lyr_S2F4 = new ol.layer.Vector({
                source:jsonSource_S2F4, 
                style: style_S2F4,
                title: '<img src="styles/legend/S2F4.png" /> S2F'
            });var format_PPE5 = new ol.format.GeoJSON();
var features_PPE5 = format_PPE5.readFeatures(json_PPE5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPE5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PPE5.addFeatures(features_PPE5);var lyr_PPE5 = new ol.layer.Vector({
                source:jsonSource_PPE5, 
                style: style_PPE5,
                title: '<img src="styles/legend/PPE5.png" /> PPE'
            });var format_NMA6 = new ol.format.GeoJSON();
var features_NMA6 = format_NMA6.readFeatures(json_NMA6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMA6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NMA6.addFeatures(features_NMA6);var lyr_NMA6 = new ol.layer.Vector({
                source:jsonSource_NMA6, 
                style: style_NMA6,
                title: '<img src="styles/legend/NMA6.png" /> NMA'
            });var format_N2Africa7 = new ol.format.GeoJSON();
var features_N2Africa7 = format_N2Africa7.readFeatures(json_N2Africa7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N2Africa7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_N2Africa7.addFeatures(features_N2Africa7);var lyr_N2Africa7 = new ol.layer.Vector({
                source:jsonSource_N2Africa7, 
                style: style_N2Africa7,
                title: '<img src="styles/legend/N2Africa7.png" /> N2Africa'
            });var format_LIFT8 = new ol.format.GeoJSON();
var features_LIFT8 = format_LIFT8.readFeatures(json_LIFT8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIFT8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIFT8.addFeatures(features_LIFT8);var lyr_LIFT8 = new ol.layer.Vector({
                source:jsonSource_LIFT8, 
                style: style_LIFT8,
                title: '<img src="styles/legend/LIFT8.png" /> LIFT'
            });var format_ISSD9 = new ol.format.GeoJSON();
var features_ISSD9 = format_ISSD9.readFeatures(json_ISSD9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISSD9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ISSD9.addFeatures(features_ISSD9);var lyr_ISSD9 = new ol.layer.Vector({
                source:jsonSource_ISSD9, 
                style: style_ISSD9,
                title: '<img src="styles/legend/ISSD9.png" /> ISSD'
            });var format_IPM10 = new ol.format.GeoJSON();
var features_IPM10 = format_IPM10.readFeatures(json_IPM10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPM10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_IPM10.addFeatures(features_IPM10);var lyr_IPM10 = new ol.layer.Vector({
                source:jsonSource_IPM10, 
                style: style_IPM10,
                title: '<img src="styles/legend/IPM10.png" /> IPM'
            });var format_IMAGINE11 = new ol.format.GeoJSON();
var features_IMAGINE11 = format_IMAGINE11.readFeatures(json_IMAGINE11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMAGINE11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_IMAGINE11.addFeatures(features_IMAGINE11);var lyr_IMAGINE11 = new ol.layer.Vector({
                source:jsonSource_IMAGINE11, 
                style: style_IMAGINE11,
                title: '<img src="styles/legend/IMAGINE11.png" /> IMAGINE'
            });var format_GEDVC12 = new ol.format.GeoJSON();
var features_GEDVC12 = format_GEDVC12.readFeatures(json_GEDVC12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEDVC12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GEDVC12.addFeatures(features_GEDVC12);var lyr_GEDVC12 = new ol.layer.Vector({
                source:jsonSource_GEDVC12, 
                style: style_GEDVC12,
                title: '<img src="styles/legend/GEDVC12.png" /> GEDVC'
            });var format_FP13 = new ol.format.GeoJSON();
var features_FP13 = format_FP13.readFeatures(json_FP13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FP13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FP13.addFeatures(features_FP13);var lyr_FP13 = new ol.layer.Vector({
                source:jsonSource_FP13, 
                style: style_FP13,
                title: '<img src="styles/legend/FP13.png" /> FP'
            });var format_FGI14 = new ol.format.GeoJSON();
var features_FGI14 = format_FGI14.readFeatures(json_FGI14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FGI14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FGI14.addFeatures(features_FGI14);var lyr_FGI14 = new ol.layer.Vector({
                source:jsonSource_FGI14, 
                style: style_FGI14,
                title: '<img src="styles/legend/FGI14.png" /> FGI'
            });var format_FLAIE15 = new ol.format.GeoJSON();
var features_FLAIE15 = format_FLAIE15.readFeatures(json_FLAIE15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLAIE15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FLAIE15.addFeatures(features_FLAIE15);var lyr_FLAIE15 = new ol.layer.Vector({
                source:jsonSource_FLAIE15, 
                style: style_FLAIE15,
                title: '<img src="styles/legend/FLAIE15.png" /> FLAIE'
            });var format_EVOCA16 = new ol.format.GeoJSON();
var features_EVOCA16 = format_EVOCA16.readFeatures(json_EVOCA16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EVOCA16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EVOCA16.addFeatures(features_EVOCA16);var lyr_EVOCA16 = new ol.layer.Vector({
                source:jsonSource_EVOCA16, 
                style: style_EVOCA16,
                title: '<img src="styles/legend/EVOCA16.png" /> EVOCA'
            });var format_DEMBA17 = new ol.format.GeoJSON();
var features_DEMBA17 = format_DEMBA17.readFeatures(json_DEMBA17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEMBA17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DEMBA17.addFeatures(features_DEMBA17);var lyr_DEMBA17 = new ol.layer.Vector({
                source:jsonSource_DEMBA17, 
                style: style_DEMBA17,
                title: '<img src="styles/legend/DEMBA17.png" /> DEMBA'
            });var format_DairyBISS18 = new ol.format.GeoJSON();
var features_DairyBISS18 = format_DairyBISS18.readFeatures(json_DairyBISS18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DairyBISS18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DairyBISS18.addFeatures(features_DairyBISS18);var lyr_DairyBISS18 = new ol.layer.Vector({
                source:jsonSource_DairyBISS18, 
                style: style_DairyBISS18,
                title: '<img src="styles/legend/DairyBISS18.png" /> DairyBISS'
            });var format_CS19 = new ol.format.GeoJSON();
var features_CS19 = format_CS19.readFeatures(json_CS19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CS19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CS19.addFeatures(features_CS19);var lyr_CS19 = new ol.layer.Vector({
                source:jsonSource_CS19, 
                style: style_CS19,
                title: '<img src="styles/legend/CS19.png" /> CS'
            });var format_CASCAPE20 = new ol.format.GeoJSON();
var features_CASCAPE20 = format_CASCAPE20.readFeatures(json_CASCAPE20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASCAPE20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CASCAPE20.addFeatures(features_CASCAPE20);var lyr_CASCAPE20 = new ol.layer.Vector({
                source:jsonSource_CASCAPE20, 
                style: style_CASCAPE20,
                title: '<img src="styles/legend/CASCAPE20.png" /> CASCAPE'
            });var format_BM21 = new ol.format.GeoJSON();
var features_BM21 = format_BM21.readFeatures(json_BM21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BM21.addFeatures(features_BM21);var lyr_BM21 = new ol.layer.Vector({
                source:jsonSource_BM21, 
                style: style_BM21,
                title: '<img src="styles/legend/BM21.png" /> BM'
            });var format_ASMA22 = new ol.format.GeoJSON();
var features_ASMA22 = format_ASMA22.readFeatures(json_ASMA22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASMA22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ASMA22.addFeatures(features_ASMA22);var lyr_ASMA22 = new ol.layer.Vector({
                source:jsonSource_ASMA22, 
                style: style_ASMA22,
                title: '<img src="styles/legend/ASMA22.png" /> ASMA'
            });var format_AFVP23 = new ol.format.GeoJSON();
var features_AFVP23 = format_AFVP23.readFeatures(json_AFVP23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFVP23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AFVP23.addFeatures(features_AFVP23);var lyr_AFVP23 = new ol.layer.Vector({
                source:jsonSource_AFVP23, 
                style: style_AFVP23,
                title: '<img src="styles/legend/AFVP23.png" /> AFVP'
            });var format_AFER24 = new ol.format.GeoJSON();
var features_AFER24 = format_AFER24.readFeatures(json_AFER24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFER24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AFER24.addFeatures(features_AFER24);var lyr_AFER24 = new ol.layer.Vector({
                source:jsonSource_AFER24, 
                style: style_AFER24,
                title: '<img src="styles/legend/AFER24.png" /> AFER+'
            });var format_AFAL25 = new ol.format.GeoJSON();
var features_AFAL25 = format_AFAL25.readFeatures(json_AFAL25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFAL25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AFAL25.addFeatures(features_AFAL25);var lyr_AFAL25 = new ol.layer.Vector({
                source:jsonSource_AFAL25, 
                style: style_AFAL25,
                title: '<img src="styles/legend/AFAL25.png" /> AFAL'
            });var format_ADIAS26 = new ol.format.GeoJSON();
var features_ADIAS26 = format_ADIAS26.readFeatures(json_ADIAS26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADIAS26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADIAS26.addFeatures(features_ADIAS26);var lyr_ADIAS26 = new ol.layer.Vector({
                source:jsonSource_ADIAS26, 
                style: style_ADIAS26,
                title: '<img src="styles/legend/ADIAS26.png" /> ADIAS'
            });var format_AAA27 = new ol.format.GeoJSON();
var features_AAA27 = format_AAA27.readFeatures(json_AAA27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AAA27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AAA27.addFeatures(features_AAA27);var lyr_AAA27 = new ol.layer.Vector({
                source:jsonSource_AAA27, 
                style: style_AAA27,
                title: '<img src="styles/legend/AAA27.png" /> AAA'
            });var format_PhDProject28 = new ol.format.GeoJSON();
var features_PhDProject28 = format_PhDProject28.readFeatures(json_PhDProject28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhDProject28 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PhDProject28.addFeatures(features_PhDProject28);var lyr_PhDProject28 = new ol.layer.Vector({
                source:jsonSource_PhDProject28, 
                style: style_PhDProject28,
                title: '<img src="styles/legend/PhDProject28.png" /> PhD Project'
            });

lyr_Woredas0.setVisible(true);lyr_TAMASA1.setVisible(true);lyr_SHL2.setVisible(true);lyr_SBN3.setVisible(true);lyr_S2F4.setVisible(true);lyr_PPE5.setVisible(true);lyr_NMA6.setVisible(true);lyr_N2Africa7.setVisible(true);lyr_LIFT8.setVisible(true);lyr_ISSD9.setVisible(true);lyr_IPM10.setVisible(true);lyr_IMAGINE11.setVisible(true);lyr_GEDVC12.setVisible(true);lyr_FP13.setVisible(true);lyr_FGI14.setVisible(true);lyr_FLAIE15.setVisible(true);lyr_EVOCA16.setVisible(true);lyr_DEMBA17.setVisible(true);lyr_DairyBISS18.setVisible(true);lyr_CS19.setVisible(true);lyr_CASCAPE20.setVisible(true);lyr_BM21.setVisible(true);lyr_ASMA22.setVisible(true);lyr_AFVP23.setVisible(true);lyr_AFER24.setVisible(true);lyr_AFAL25.setVisible(true);lyr_ADIAS26.setVisible(true);lyr_AAA27.setVisible(true);lyr_PhDProject28.setVisible(true);
var layersList = [baseLayer,lyr_Woredas0,lyr_TAMASA1,lyr_SHL2,lyr_SBN3,lyr_S2F4,lyr_PPE5,lyr_NMA6,lyr_N2Africa7,lyr_LIFT8,lyr_ISSD9,lyr_IPM10,lyr_IMAGINE11,lyr_GEDVC12,lyr_FP13,lyr_FGI14,lyr_FLAIE15,lyr_EVOCA16,lyr_DEMBA17,lyr_DairyBISS18,lyr_CS19,lyr_CASCAPE20,lyr_BM21,lyr_ASMA22,lyr_AFVP23,lyr_AFER24,lyr_AFAL25,lyr_ADIAS26,lyr_AAA27,lyr_PhDProject28];
lyr_Woredas0.set('fieldAliases', {'Woreda': 'Woreda', });
lyr_TAMASA1.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_SHL2.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_SBN3.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_S2F4.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_PPE5.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_NMA6.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_N2Africa7.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_LIFT8.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_ISSD9.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_IPM10.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_IMAGINE11.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_GEDVC12.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_FP13.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_FGI14.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_FLAIE15.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_EVOCA16.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_DEMBA17.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_DairyBISS18.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_CS19.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_CASCAPE20.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_BM21.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_ASMA22.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_AFVP23.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_AFER24.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_AFAL25.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_ADIAS26.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_AAA27.set('fieldAliases', {'Woreda': 'Woreda', 'Title': 'Title', });
lyr_PhDProject28.set('fieldAliases', {'Woreda': 'Woreda', 'PhD': 'PhD', });
lyr_Woredas0.set('fieldImages', {'Woreda': 'TextEdit', });
lyr_TAMASA1.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_SHL2.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_SBN3.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_S2F4.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_PPE5.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_NMA6.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_N2Africa7.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_LIFT8.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_ISSD9.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_IPM10.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_IMAGINE11.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_GEDVC12.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_FP13.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_FGI14.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_FLAIE15.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_EVOCA16.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_DEMBA17.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_DairyBISS18.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_CS19.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_CASCAPE20.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_BM21.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_ASMA22.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_AFVP23.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_AFER24.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_AFAL25.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_ADIAS26.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_AAA27.set('fieldImages', {'Woreda': 'TextEdit', 'Title': 'TextEdit', });
lyr_PhDProject28.set('fieldImages', {'Woreda': 'TextEdit', 'PhD': 'TextEdit', });
lyr_Woredas0.set('fieldLabels', {'Woreda': 'no label', });
lyr_TAMASA1.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_SHL2.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_SBN3.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_S2F4.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_PPE5.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_NMA6.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_N2Africa7.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_LIFT8.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_ISSD9.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_IPM10.set('fieldLabels', {'Woreda': 'header label', 'Title': 'no label', });
lyr_IMAGINE11.set('fieldLabels', {'Woreda': 'no label', 'Title': 'header label', });
lyr_GEDVC12.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_FP13.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_FGI14.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_FLAIE15.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_EVOCA16.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_DEMBA17.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_DairyBISS18.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_CS19.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_CASCAPE20.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_BM21.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_ASMA22.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_AFVP23.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_AFER24.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_AFAL25.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_ADIAS26.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_AAA27.set('fieldLabels', {'Woreda': 'header label', 'Title': 'header label', });
lyr_PhDProject28.set('fieldLabels', {'Woreda': 'header label', 'PhD': 'header label', });
lyr_PhDProject28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});