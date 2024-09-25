document.getElementById('convert-btn').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temp)) {
        result = 'Please enter a valid number!';
    } else {
        if (unit === 'celsius') {
            const fahrenheit = (temp * 9/5) + 32;
            const kelvin = temp + 273.15;
            result = `${temp}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K.`;
        } else if (unit === 'fahrenheit') {
            const celsius = (temp - 32) * 5/9;
            const kelvin = (temp - 32) * 5/9 + 273.15;
            result = `${temp}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K.`;
        } else if (unit === 'kelvin') {
            const celsius = temp - 273.15;
            const fahrenheit = (temp - 273.15) * 9/5 + 32;
            result = `${temp}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F.`;
        }
    }

    document.getElementById('result').textContent = result;
});
