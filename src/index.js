import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let a = "bottles of beer on the wall";
let b = "bottles of beer";
let c = "Take one down, pass it around";
function dodaj(a,b)
{
  return a+b
}
function ispis() {
  let s = "";
  for (var i = 99; i > 0; i--) {
    s=dodaj(s, i.toString() + " " + a + "\n");
    s=dodaj(s,i.toString() + " " + b + "\n");
    s=dodaj(s,c + "\n");
  }
  return s;
}
console.log(ispis());
