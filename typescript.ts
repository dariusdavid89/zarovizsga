function osszesOszto(szam: number): number[] {
    const osztok: number[] = [];
    for(let i = 1; i <= szam; i++){
        if(szam % i == 0) osztok.push(i);
    }
    return osztok;
}
console.log(osszesOszto(10));

function parosDarab(szam: number[]): number{

    let db: number = 0;
    for(let i = 0; i < szam.length; i++){
        if(szam[i] % 2 == 0){
            db++
        }
    }
        return db;
}
console.log(parosDarab([12, 3, 4, 1]))

function  fuggvenyhivasPalindrom(fn: () => string): boolean {

    const fuggveny: string = fn();
    let vissza: string = "";
    for(let i = fuggveny.length - 1; i >= 0; i--){
        vissza += fuggveny[i];  

    }
        if(vissza === fuggveny) return true
        else return false;
        
}
