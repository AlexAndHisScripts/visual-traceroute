const map = new Datamap({
    element: document.getElementById("container"),
    scope: "world",
    fills: { defaultFill: "black", },

    geographyConfig: {
        "hideAntarctica" : true,
        borderWidth: 0.75,
        borderColor: "#00fa43",

        popupTemplate: function (geography, data) {
            return '<div class="hoverinfo">' +
              geography.properties.name + '</div>';
          },

        popupOnHover: true,
        highlightOnHover: true,
        highlightFillColor: "#00fa43",
        highlightBorderColor: "#00fa43",
        highlightBorderWidth: 2
    },
});

function makeArc(o1, o2, d1, d2, dur) {
    map.arc([{
        origin: {
            latitude: o1,
            longitude: o2,
        },
        destination: {
            latitude: d1,
            longitude: d2,
        }
    }], {
        animationSpeed: dur
    })
}

function trace() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)

            console.log(data)
        }
    }

    xhttp.open("GET", "/trace_data")

    xhttp.setRequestHeader("host_data", document.getElementById("dstIn").value)

    xhttp.send()
}