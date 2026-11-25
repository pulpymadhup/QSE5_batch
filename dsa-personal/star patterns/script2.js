let num = 5 ;
for(let i = 0 ; i<=num ; i++){
    for(let j = num-i ; j>=0 ; j--){
        process.stdout.write(" ")
    }
    for(let k= 1 ; k<=i ; k++){
        process.stdout.write(" *")
    }
    console.log()
}