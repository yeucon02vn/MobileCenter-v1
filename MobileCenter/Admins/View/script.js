
$(document).ready(function () {


    $("#datepicker").change(function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                if (document.getElementById("exampleRadios1").checked == true) {
                    var str = document.getElementById("datepicker").value;
                    var Year = str.substring(str.length - 4, str.length);
                    switch (Year) {
                        case "2018":
                            _dataPointsYear = [
                                { label: "Laptop", y: myArr["2018"]["laptop"] },
                                { label: "Tablet", y: myArr["2018"]["tablet"] },
                                { label: "Phone", y: myArr["2018"]["phone"] },
                                { label: "Recorder", y: myArr["2018"]["recorder"] },
                                { label: "Player Music", y: myArr["2018"]["playermusic"] },
                                { label: "Camera", y: myArr["2018"]["camera"] },
                                { label: "Television", y: myArr["2018"]["television"] },
                            ]
                            break;
                        case "2019":
                            _dataPointsYear = [
                                { label: "Laptop", y: myArr["2019"]["laptop"] },
                                { label: "Tablet", y: myArr["2019"]["tablet"] },
                                { label: "Phone", y: myArr["2019"]["phone"] },
                                { label: "Recorder", y: myArr["2019"]["recorder"] },
                                { label: "Player Music", y: myArr["2019"]["playermusic"] },
                                { label: "Camera", y: myArr["2019"]["camera"] },
                                { label: "Television", y: myArr["2019"]["television"] },
                            ]
                            break;
                        case "2020":
                            _dataPointsYear = [
                                { label: "Laptop", y: myArr["2020"]["laptop"] },
                                { label: "Tablet", y: myArr["2020"]["tablet"] },
                                { label: "Phone", y: myArr["2020"]["phone"] },
                                { label: "Recorder", y: myArr["2020"]["recorder"] },
                                { label: "Player Music", y: myArr["2020"]["playermusic"] },
                                { label: "Camera", y: myArr["2020"]["camera"] },
                                { label: "Television", y: myArr["2020"]["television"] },
                            ]
                            break;
                        default:
                            _dataPointsYear = [
                                { label: "Laptop", y: 0 },
                                { label: "Tablet", y: 0 },
                                { label: "Phone", y: 0 },
                                { label: "Recorder", y: 0 },
                                { label: "Player Music", y: 0 },
                                { label: "Camera", y: 0 },
                                { label: "Television", y: 0 },
                            ]
                            break;
                    }

                    var optionsYear = {
                        animationEnabled: true,
                        title: {
                            text: "Statistical - " + Year
                        },
                        axisY: {
                            title: "Statistical (in %)",
                            suffix: "%",
                            includeZero: false
                        },
                        axisX: {
                            title: "Devices"
                        },
                        data: [{
                            type: "column",
                            yValueFormatString: "#,##0.0#" % "",
                            dataPoints: _dataPointsYear
                        }]
                    };
                    $("#chartContainerYear").CanvasJSChart(optionsYear);
                }
                else {
                    var _dataPoints;
                    var _dataPointsYear;
                    switch (document.getElementById("datepicker").value) {
                        case "05/2020":
                            _dataPoints = [
                                { label: "Laptop", y: myArr["05/2020"]["laptop"] },
                                { label: "Tablet", y: myArr["05/2020"]["tablet"] },
                                { label: "Phone", y: myArr["05/2020"]["phone"] },
                                { label: "Recorder", y: myArr["05/2020"]["recorder"] },
                                { label: "Player Music", y: myArr["05/2020"]["playermusic"] },
                                { label: "Camera", y: myArr["05/2020"]["camera"] },
                                { label: "Television", y: myArr["05/2020"]["television"] },

                            ]
                            break;
                        case "06/2020":
                            _dataPoints = [
                                { label: "Laptop", y: myArr["06/2020"]["laptop"] },
                                { label: "Tablet", y: myArr["06/2020"]["tablet"] },
                                { label: "Phone", y: myArr["06/2020"]["phone"] },
                                { label: "Recorder", y: myArr["06/2020"]["recorder"] },
                                { label: "Player Music", y: myArr["06/2020"]["playermusic"] },
                                { label: "Camera", y: myArr["06/2020"]["camera"] },
                                { label: "Television", y: myArr["06/2020"]["television"] },

                            ]
                            break;
                        case "07/2020":
                            _dataPoints = [
                                { label: "Laptop", y: myArr["07/2020"]["laptop"] },
                                { label: "Tablet", y: myArr["07/2020"]["tablet"] },
                                { label: "Phone", y: myArr["07/2020"]["phone"] },
                                { label: "Recorder", y: myArr["07/2020"]["recorder"] },
                                { label: "Player Music", y: myArr["07/2020"]["playermusic"] },
                                { label: "Camera", y: myArr["07/2020"]["camera"] },
                                { label: "Television", y: myArr["07/2020"]["television"] },

                            ]
                            break;
                        case "12/2019":
                            _dataPoints = [
                                { label: "Laptop", y: myArr["12/2019"]["laptop"] },
                                { label: "Tablet", y: myArr["12/2019"]["tablet"] },
                                { label: "Phone", y: myArr["12/2019"]["phone"] },
                                { label: "Recorder", y: myArr["12/2019"]["recorder"] },
                                { label: "Player Music", y: myArr["12/2019"]["playermusic"] },
                                { label: "Camera", y: myArr["12/2019"]["camera"] },
                                { label: "Television", y: myArr["12/2019"]["television"] },

                            ]
                            break;
                        case "12/2018":
                            _dataPoints = [
                                { label: "Laptop", y: myArr["12/2018"]["laptop"] },
                                { label: "Tablet", y: myArr["12/2018"]["tablet"] },
                                { label: "Phone", y: myArr["12/2018"]["phone"] },
                                { label: "Recorder", y: myArr["12/2018"]["recorder"] },
                                { label: "Player Music", y: myArr["12/2018"]["playermusic"] },
                                { label: "Camera", y: myArr["12/2018"]["camera"] },
                                { label: "Television", y: myArr["12/2018"]["television"] },

                            ]
                            break;
                        default:
                            _dataPoints = [
                                { label: "Laptop", y: 0 },
                                { label: "Tablet", y: 0 },
                                { label: "Phone", y: 0 },
                                { label: "Recorder", y: 0 },
                                { label: "Player Music", y: 0 },
                                { label: "Camera", y: 0 },
                                { label: "Television", y: 0 },
                            ]
                            break;
                    }
                    var options = {
                        animationEnabled: true,
                        title: {
                            text: "Statistical - " + document.getElementById("datepicker").value
                        },
                        axisY: {
                            title: "Statistical (in %)",
                            suffix: "%",
                            includeZero: false
                        },
                        axisX: {
                            title: "Devices"
                        },
                        data: [{
                            type: "column",
                            yValueFormatString: "#,##0.0#" % "",
                            dataPoints: _dataPoints
                        }]
                    };
                    $("#chartContainer").CanvasJSChart(options);

                }

            }

        };
        xmlhttp.open("GET", "https://localhost:44375/Admins/View/chart.json", true);
        xmlhttp.send();

    });

});
window.onload = function () {
    var today = new Date();
    if (today.getMonth() < 10)
        var time = "0" + (today.getMonth() + 1) + "/" + today.getFullYear();
    else
        var time = (today.getMonth() + 1) + "/" + today.getFullYear();

    document.getElementById("datepicker").value = time;
    var options = {
        animationEnabled: true,
        title: {
            text: "Statistical - " + time
        },
        axisY: {
            title: "Statistical (in %)",
            suffix: "%",
            includeZero: false
        },
        axisX: {
            title: "Devices"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#" % "",
            dataPoints: [
                { label: "Laptop", y: 10.09 },
                { label: "Tablet", y: 9.40 },
                { label: "Phone", y: 8.50 },
                { label: "Recorder", y: 7.96 },
                { label: "Player Music", y: 7.80 },
                { label: "Camera", y: 7.56 },
                { label: "Television", y: 7.20 },
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    var optionsYear = {
        animationEnabled: true,
        title: {
            text: "Statistical - 2020"
        },
        axisY: {
            title: "Statistical (in %)",
            suffix: "%",
            includeZero: false
        },
        axisX: {
            title: "Devices"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#" % "",
            dataPoints: [
                { label: "Year", y: 20.09 },
                { label: "Tablet", y: 9.40 },
                { label: "Phone", y: 8.50 },
                { label: "Recorder", y: 17.96 },
                { label: "Player Music", y: 7.80 },
                { label: "Camera", y: 7.56 },
                { label: "Television", y: 17.20 },
                ,
            ]
        }]
    };

    $("#chartContainerYear").CanvasJSChart(optionsYear);
}