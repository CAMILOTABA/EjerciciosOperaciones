let a,b,c,equilatero=0,isosceles=0,escaleno=0,minimo,txtMin,maximo,txtMax;
for(let i=1;i<=4;i++)
{
    a=parseFloat(prompt('Introduzca lado1'));
    b=parseFloat(prompt('Introduzca lado2'));
    c=parseFloat(prompt('Introduzca lado3'));
    document.write('<br> Triangulo '+i+' : '+a+' , '+b+' , '+c);
    if(a==b && b==c) {
        document.write(' El triangulo es equilatero ');
        equilatero=equilatero+1;
    } else if(a==b || b==c || a==c) {
        document.write(' El triangulo es isosceles ');
        isosceles=isosceles+1;
    } else { //(a!=b && b!=c)
        document.write(' El triangulo es escaleno ');
        escaleno=escaleno+1;
    }
}
document.write('<br> Triangulos equilateros hay '+equilatero);
document.write('<br> Triangulos isosceles hay '+isosceles);
document.write('<br> Triangulos escalenos hay '+escaleno);
minimo=equilatero;
txtMin='equilatero';
if (isosceles<minimo) {
    minimo=isosceles;
    txtMin='isosceles';
}
if (escaleno<minimo) {
    txtMin='escaleno';
}

maximo=equilatero;
txtMax='equilatero';
if (isosceles>maximo) {
    maximo=isosceles;
    txtMax='isosceles';
}
if (escaleno>maximo) {
    txtMax='escaleno';
}

document.write('<br> El tipo de triángulo del que hay menor cantidad es: '+txtMin);
document.write('<br> El tipo de triángulo del que hay mayor cantidad es: '+txtMax);
      /* Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.*/
       
       