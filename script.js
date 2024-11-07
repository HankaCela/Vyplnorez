const fillcut = (str, len) => {
    if (str.length > len) {
        return str.slice(0, len); // ořízne řetězec na požadovanou délku
    } else if (str.length < len) {
        return '.'.repeat(len - str.length) + str; // doplní tečky zleva
    } else {
        return str; // pokud je délka stejná, vrátí původní řetězec
    }
};

// Testování
document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“