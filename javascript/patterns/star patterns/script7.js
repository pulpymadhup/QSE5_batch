let num = 5 ;

// diamiont patterns


for(let i = 1 ; i<=num ; i++){
    for(let k = num-i ; k >=0 ; k--){
        process.stdout.write(" ");
    }
    for(let j=1 ; j <=i ; j++){
        process.stdout.write(" *");
    }
    console.log();
}
for(let i = 1 ; i<= num ; i++){
    for(let j = 0 ; j<=i ; j++){
        process.stdout.write(" ")
    }
    for(let k = num-i ; k>0 ;k--){
        process.stdout.write(" *")
    }
    console.log()
}