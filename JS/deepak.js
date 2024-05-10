let a,b,c,d,e;
const input = require('prompt-sync')();
a = Number(input("Enter the value of a :"));
b = Number(input("Enter the value of b :"));
c = Number(input("Enter the value of c :"));
d = Number(input("Enter the value of d :"));
e = Number(input("Enter the value of e :"));

let fr1 = 1, fr2 = 1, fr3 = 1, fr4 = 1, fr5 = 1;

if (a === b){
    fr1++;
    b = 0;

    if ( a === c){
        fr1++;
        c = 0;

        if (a === d){
            fr1++;
            d = 0;

            if (a === e){
                fr1++;
                e = 0;
            }
        }
        else if (a === e){
                fr1++;
                e = 0;
            }
        
    }
    else if (a === d) {
            fr1++;
            d = 0;

            if (a === e){
                fr1++;
                e = 0;
            }
        }
        else if (a === e){
                fr1++;
                e =0;
            }
        
    
}
else if (a === c){
        fr1++;
        c = 0;

        if (a === d){
            fr1++;
            d = 0;

            if (a === e){
                fr1++;
                e = 0;
            }
        }
        else 
        {
            if (a === e)
            {
                fr1++;
                e = 0;
            }
        }
    }
    else if (a === d){
            fr1++;
            d = 0;

            if (a === e)
            {
                fr1++;
                e = 0;
            }
        }
        else if (a === e){
                fr1++;
                e = 0;
            }
        
    

console.log(`${a} =`, fr1);

if (b != 0)
{
    if (b === c)
    {
        fr2++;
        c = 0;

        if (b === d)
        {
            fr2++;
            d = 0;

            if (b === e)
            {
                fr2++;
                e = 0;
            }
        }
        else 
        {
            if (b === e)
            {
                fr2++;
                e = 0;
            }
        }
    }
    else 
    {
        if (b === d)
        {
            fr2++;
            d = 0;

            if (b === e)
            {
                fr2++;
                e = 0;
            }
        }
        else 
        {
            if (b === e)
            {
                fr2++;
                e = 0;
            }
        }
    }
    console.log(`${b} =`, fr2);
}

if (c != 0)
{
if (c === d)
{
    fr3++;
    d = 0;

    if (c === e)
    {
        fr3++;
        e = 0;
    }
}
else
{
    if (c === e)
    {
        fr3++;
        e = 0;
    }
}
console.log(`${c} =`,fr3);
}


if (d != 0)
{
    if (d === e)
    {
        fr4++;
        e = 0;
    }
    console.log(`${d} =`,fr4);
}


if (e != 0)
{
    console.log( `${e} =`, fr5);
}