let first  = 0 ;
let second  = 1 ;
let sum ;

for(let i = 1 ; i <=5 ; i++){
    for(let j = 0 ; j<i ; j++){
        process.stdout.write(` ${first} `)
    

    sum = first + second
    first = second ;
    second = sum ;
    }
    console.log();
    
}
