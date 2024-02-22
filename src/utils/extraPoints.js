import jsonData from "../../data/test-data.json"; // JSON que se envio en la prueba

/*
Punto Extra:
    Imagina que estás laborando con nosotros, y debes procesar diariamente
    datos de un registro de monitorización IoT, “JSON” el cual contiene datos
    sobre dispositivos asociados al aplicativo, debes identificar en los registros
    lo siguiente:
*/

// Cuántos registros provienen de un "temperature-sensor"
const temperatureSensorRecords = jsonData.data.filter(record => record.type === "temperature-sensor");
const numberOfTemperatureSensorRecords = temperatureSensorRecords.length;
console.log(`Número de registros de temperature-sensor: ${numberOfTemperatureSensorRecords}`);

// Cuántos dispositivos tiene el proyecto con el id 3:
const projectId = 3;
const devicesInProject3 = jsonData.data.filter(record => record.ProjectId === projectId);
const numberOfDevicesInProject3 = devicesInProject3.length;
console.log(`Número de dispositivos en el proyecto con ID 3: ${numberOfDevicesInProject3}`);

// Cuál es el dispositivo más usado en todos los proyectos (suponiendo un campo "usageCount"):
const mostUsedDevice = jsonData.data.reduce((mostUsed, currentDevice) => {
    return currentDevice.usageCount > mostUsed.usageCount ? currentDevice : mostUsed;
}, { usageCount: 0 });
console.log(`El dispositivo más usado es: ${mostUsedDevice.type}`);

// Dependiendo del ID del proyecto, cuáles son los dispositivos que presentan inconvenientes (disabled):
const problemProjectId = 16; /* ID del proyecto con problemas (por ejemplo 16) */;
const problemDevicesInProject = jsonData.data.filter(record => record.ProjectId === problemProjectId && record.state === "disabled");
console.log(`Dispositivos con problemas en el proyecto ${problemProjectId}:`, problemDevicesInProject);