initializeApp()

const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }];

class Battery {
    constructor(batteryName, capacityAh, voltage, maxDraw, endVoltage) {
        this.batteryName = batteryName;
        this.capacityAh = capacityAh;
        this.voltage = voltage;
        this.maxDraw = maxDraw;
        this.endVoltage = endVoltage;
    }
}

const batteryObj = [];
for (let i=0; i<battery.length; i++) {
    batteryObj.push(new Battery(battery[i]["batteryName"], battery[i]["capacityAh"], battery[i]["voltage"], battery[i]["maxDraw"], battery[i]["endVoltage"]));
}

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;

class Camera {
    constructor(brand, model, powerConsumptionWh) {
        this.brand = brand;
        this.model = model;
        this.powerConsumptionWh = powerConsumptionWh;
    }
}

const cameraObj = [];
for (let i=0; i<camera.length; i++) {
    cameraObj.push(new Camera(camera[i]["brand"], camera[i]["model"], camera[i]["powerConsumptionWh"]));
}

let brandDict = {};
for (let i=0; i<cameraObj.length; i++) {
    brandDict[cameraObj[i].brand] = 0;
}

const brandArr = [];
for (k in brandDict){
    brandArr.push(k);
}

// brand
let brandName = document.getElementById("brand");
for (let i=0; i<brandArr.length; i++) {
    let brandOption = document.createElement("option");
    brandOption.innerHTML = brandArr[i];
    brandOption.value = brandArr[i];
    brandName.append(brandOption);
}

// model
let modelName = document.getElementById("model");
let brandEle = brandArr[0];
for (let i=0; i<camera.length; i++) {
    if (brandEle === camera[i]["brand"]) {
        let modelOption = document.createElement("option");
        modelOption.innerHTML = camera[i]["model"];
        modelOption.value = camera[i]["model"];
        modelName.append(modelOption);
    }
}

function initializeApp() {
    const target = document.getElementById("target");
    target.innerHTML = 
    `
        <div class="bg-primary text-white text-center py-2 mb-3">
            <h1>Battery Finder Program</h1>
        </div>
        <div class="mx-auto col-10">
            <div class="mb-3">
                <p class="mb-1">Step1: Selct your brand</p>
                <select name="brand" id="brand"></select>
            </div>
            <div class="mb-3">
                <p class="mb-1">Step2: Select your model</p>
                <select name="model" id="model"></select>
            </div>
            <div class="mb-3">
                <p class="mb-1">Step3: Input accessory power consumption</p>
                <input type="number" id="power" value="55" min="0" max="100">
            </div>
            <div class="mb-3">
                <p class="mb-1">Step4: Choose your battery</p>
                <div id="battery"></div>
            </div>
        </div>
    `;
}