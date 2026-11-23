let num = 5 ;

for(let i = 0 ; i<= num ; i++){
    for(let j = 0 ; j<=i-1 ; j++){
        process.stdout.write("   ")
    }
    for(let k = num-i ; k>0 ;k--){
        process.stdout.write(" * ")
    }
    console.log()
}