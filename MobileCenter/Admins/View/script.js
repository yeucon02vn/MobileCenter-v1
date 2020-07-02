
window.onload = function () {

    var options = {
        animationEnabled: true,
        title: {
            text: "Statistics of products sold in June - 2020"
        },
        axisY: {
            title: "Statistics (in %)",
            suffix: "%",
            includeZero: false
        },
        axisX: {
            title: "Countries"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#" % "",
            dataPoints: [
                { label: "Laptop", y: 10.09 },
                { label: "Tivi", y: 9.40 },
                { label: "Tablet", y: 8.50 },
                { label: "Phone", y: 7.96 },
                { label: "Recorder", y: 7.80 },
                { label: "Player ", y: 7.56 },
                { label: "Camera", y: 7.20 },
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

}