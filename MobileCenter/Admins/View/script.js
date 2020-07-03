$(document).ready(function () {
    $("#datepicker").change(function () {
        var _dataPoints;

        switch (document.getElementById("datepicker").value) {
            case "04/2020":
                _dataPoints = [
                    { label: "Laptop", y: 45.09 },
                    { label: "Tablet", y: 39.40 },
                    { label: "Phone", y: 25.50 },
                    { label: "Music Player", y: 12.96 },
                    { label: "Recorder", y: 12.80 },
                    { label: "Television", y: 34.56 },
                    { label: "Camera", y: 45.20 },
                ]
                break;
            case "05/2020":
                _dataPoints = [
                    { label: "Laptop", y: 15.09 },
                    { label: "Tablet", y: 9.40 },
                    { label: "Phone", y: 8.50 },
                    { label: "Music Player", y: 7.96 },
                    { label: "Recorder", y: 7.80 },
                    { label: "Television", y: 7.56 },
                    { label: "Camera", y: 24.20 },
                ]
                break;
            case "06/2020":
                _dataPoints = [
                    { label: "Laptop", y: 20.09 },
                    { label: "Tablet", y: 9.40 },
                    { label: "Phone", y: 8.50 },
                    { label: "Music Player", y: 7.96 },
                    { label: "Recorder", y: 56.80 },
                    { label: "Television", y: 7.56 },
                    { label: "Camera", y: 7.20 },
                ]
                break;
            case "07/2020":
                _dataPoints = [
                    { label: "Laptop", y: 30.09 },
                    { label: "Tablet", y: 9.40 },
                    { label: "Phone", y: 8.50 },
                    { label: "Music Player", y: 7.96 },
                    { label: "Recorder", y: 35.80 },
                    { label: "Television", y: 7.56 },
                    { label: "Camera", y: 7.20 },
                ]
                break;
            default:
                _dataPoints = [
                    { label: "Laptop", y: 0 },
                    { label: "Tablet", y: 0 },
                    { label: "Phone", y: 0 },
                    { label: "Music Player", y: 0 },
                    { label: "Recorder", y: 0 },
                    { label: "Television", y: 0 },
                    { label: "Camera", y: 0 },
                ]
                break;
        }


        var options = {
            animationEnabled: true,
            title: {
                text: "GDP Growth Rate -" + document.getElementById("datepicker").value
            },
            axisY: {
                title: "Growth Rate (in %)",
                suffix: "%",
                includeZero: false
            },
            axisX: {
                title: "Countries"
            },
            data: [{
                type: "column",
                yValueFormatString: "#,##0.0#" % "",
                dataPoints: _dataPoints
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
    });

});
window.onload = function () {
    var today = new Date();
    if ((today.getMonth() + 1) < 10)
        var time = "0" + (today.getMonth() + 1) + "/" + today.getFullYear();
    else
        var time = (today.getMonth() + 1) + "/" + today.getFullYear();

    document.getElementById("datepicker").value = time;
    var options = {
        animationEnabled: true,
        title: {
            text: "GDP Growth Rate -" + time
        },
        axisY: {
            title: "Growth Rate (in %)",
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
                { label: "Tablet", y: 9.40 },
                { label: "Phone", y: 8.50 },
                { label: "Music Player", y: 7.96 },
                { label: "Recorder", y: 34.80 },
                { label: "Television", y: 7.56 },
                { label: "Camera", y: 7.20 },

            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
}