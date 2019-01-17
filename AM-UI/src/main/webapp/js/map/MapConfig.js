define([""], function (ol) {
    var basemapconfig = [
        {
            url: "http://192.168.11.58:6080/arcgis/rest/services/zhuhai/zhuhai_tc/MapServer",
            projection: 'EPSG:4326',
            origin: [-180.0, 90.0],
            resolutions: [0.9410711005830282, 0.7031250000000002, 0.3515625000000001, 0.17578125000000006, 0.08789062500000003, 0.043945312500000014, 0.021972656250000007, 0.010986328125000003, 0.005493164062500002,
                0.002746582031250001, 0.0013732910156250004, 6.866455078125002E-4, 3.433227539062501E-4, 1.7166137695312505E-4, 8.583068847656253E-5, 4.2915344238281264E-5, 2.1457672119140632E-5, 1.0728836059570316E-5,
                5.364418029785158E-6, 2.682209014892579E-6]
        }
    ];


    var center_zoom = {
        "section": {//地图基本操作功能
            center: [113.57734, 22.27068],
            zoom: 12
        },
        "AddPopup": {
            center: [116.4750, 39.8979],
            zoom: 5
        },
        "Service": {
            center: [113.5968, 22.2832],
            zoom: 12
        }
    };

    return {
        basemapconfig: basemapconfig,
        center_zoom: center_zoom
    };
});