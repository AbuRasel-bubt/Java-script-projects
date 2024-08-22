function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = document.value;
    const value = parseFloat(elementValueString);
    return value;

}