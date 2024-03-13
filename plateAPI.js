document.addEventListener('DOMContentLoaded', function () {
    var plateIDInput = document.getElementById('Plate');
    var Make = document.getElementById('Make');


    plateIDInput.addEventListener('input', async () => {
        const plateID = plateIDInput.value.trim();
        plateIDInput.value = plateIDInput.value.toUpperCase();


        if (plateID.length === 7 || plateID.length === 17) {

            try {
                const response = await fetch(`https://v1.motorapi.dk/vehicles?registration_number=${plateID}`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'qmr19doxedet9q88o0jgjmmkt72ybyut'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    const carInfo = data[0];
                    const { make, model, variant, first_registration, model_year, color } = carInfo;

                    console.log(data);

                    const registrationYear = first_registration.substr(0, 4);


                    // Update vehicle details based on the API response
                    Make.value = make + ' ' + model + ' ('+ registrationYear + ')';

                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

});



