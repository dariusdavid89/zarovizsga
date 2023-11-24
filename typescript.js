function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0)
            osztok.push(i);
    }
    return osztok;
}
console.log(osszesOszto(10));
function parosDarab(szam) {
    var db = 0;
    for (var i = 0; i < szam.length; i++) {
        if (szam[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}
console.log(parosDarab([12, 3, 4, 1]));
function fuggvenyhivasPalindrom(fn) {
    var fuggveny = fn();
    var vissza = "";
    for (var i = fuggveny.length - 1; i >= 0; i--) {
        vissza += fuggveny[i];
    }
    if (vissza === fuggveny)
        return true;
    else
        return false;
}
