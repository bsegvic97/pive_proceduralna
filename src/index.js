import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//prvi string koji nam se ponavlja u ispisu
function prvi_str()
{
  return "bottles of beer on the wall";
}
//drugi string koji nam se ponavlja u ispisu
function drugi_str()
{
  return "bottles of beer";
}
//treci string koji se ponavlja u ispisu
function treci_str()
{
  return "Take one down, pass it around";
}
//funkcija za spajanje 2 stringa
function dodaj(a,b)
{
  //ako je duljina prvog jedan nemoj dodat novi red
  if(a.length===1)
    return a+" "+b ;
  //inace dodaj novi red
  else
    return a+" "+b+" \n"
  //ubacili ovaj uvjet jer nekad 2 puta dodajemo, a nekad 1 pa da uvijek bude tocno jedan novi red
}
let s = "";
function ispis()
 {
  
  for (var i = 99; i > 0; i--)
  {
    //dodavanje broja boca na prvi string i dodavanje na "konacno rjesenje"
    s=dodaj(s,dodaj(i.toString(),prvi_str()))
    //dodavanje broja boca na drugi string i dodavanje na "konacno rjesenje"
    s=dodaj(s,dodaj(i.toString(),drugi_str()))
    //dodavanje treceg string konacnom rjesenju treci string je uvijek isti ne ovisi o broju bocu, tj. ne dodaje s broj boca
    s=dodaj(s,treci_str())
  }
   //ispis
  console.log(s)
}
ispis()
