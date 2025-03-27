import React, { useEffect } from 'react'

function Display(props) {
    useEffect(() => {
        var opts = {
            // options here
            // color configs
            colorStart: "#6fadcf",
            colorStop: void 0,
            gradientType: 0,
            strokeColor: "#e0e0e0",
            generateGradient: true,
            percentColors: [[0.0, "#a9d70b"], [0.50, "#f9c802"], [1.0, "#ff0000"]],
            // customize pointer
            pointer: {
                length: 0.65,
                strokeWidth: 0.035,
                iconScale: 1.0
            },
            // static labels
            staticLabels: {
                font: "13px sans-serif",
                labels: [17, 18.5, 25, 30],
                fractionDigits: 0
            },
            // static zones
            staticZones: [
                { strokeStyle: "#F03E3E", min: 10, max: 17 },
                { strokeStyle: "#FFDD00", min: 17, max: 18.5 },
                { strokeStyle: "#30B32D", min: 18.5, max: 25 },
                { strokeStyle: "#FFDD00", min: 25, max: 30 },
                { strokeStyle: "#F03E3E", min: 30, max: 50 }
            ],
            // the span of the gauge arc
            angle: 0.1,
            // line thickness
            lineWidth: 0.44,
            // radius scale
            radiusScale: 1.0,
            // font size
            fontSize: 40,
            // if false, max value increases automatically if value > maxValue
            limitMax: false,
            // if true, the min value of the gauge will be fixed
            limitMin: false,
            // High resolution support
            highDpiSupport: true
        };
        var target = document.getElementById('demo');
        var gauge = new Gauge(target).setOptions(opts);
        document.getElementById("preview-textfield").className = "preview-textfield";
        gauge.setTextField(document.getElementById("preview-textfield"));
        gauge.maxValue = 50;
        gauge.setMinValue(10);
        gauge.set((props.index));
        gauge.animationSpeed = 32;
    });
    return (
        <>
            <div id="preview-textfield" style={{opacity : "0"}}></div>
            <canvas id="demo" className='w-100'></canvas>
        </>
    )
}

export default Display