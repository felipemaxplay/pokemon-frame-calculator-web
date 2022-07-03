// Constants
/** @type {HTMLInputElement} */
var targetFrame = document.getElementById("target-frame");
/** @type {HTMLInputElement} */
var initFrame = document.getElementById("initial-frame");
/** @type {HTMLInputElement} */
var frameHit = document.getElementById("frame-hit");
/** @type {HTMLInputElement} */
var calibration = document.getElementById("calibration");

function calculateCalibration() {
    var firstCount, finalCount;
    firstCount = parseInt(targetFrame.value) - parseInt(frameHit.value);
    finalCount = firstCount + parseInt(initFrame.value);

    calibration.value = finalCount
}