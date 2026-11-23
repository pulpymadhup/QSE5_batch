let num = 5 ;

for(let i = 0 ; i <num ; i++){
    for(let j = parseInt(num/2)+1-i ;j>=0 ; j--){
        process.stdout.write(" ")
    }
    for(let k = 1 ; k<=i+1 ;k++){
         process.stdout.write( " *")
    }
    console.log()
}