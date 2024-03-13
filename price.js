document.addEventListener('DOMContentLoaded', function () {
    var Pris = document.getElementById('Price');
    var timeoutId;

    Pris.addEventListener('input', function () {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(function () {
            var priceValue = Pris.value.trim();
            var price = parseFloat(priceValue);

            if (!isNaN(price)) {
                var formattedPrice = new Intl.NumberFormat('da-DK', {
                    style: 'currency',
                    currency: 'DKK'
                }).format(price);

                Pris.value = formattedPrice;
            }
        }, 1000); // Wait for 3 seconds (3000 milliseconds) before formatting
    });
});
