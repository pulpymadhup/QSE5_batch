for(let i = 0 ; i<5 ; i++){
            for(let j = parseInt(5/2) - i + 1 ; j>=0 ; j--){
                process.stdout.write(" - ");
            } 
            for(let k = 1 ; k<= 2*i +1 ; k++){
                process.stdout.write(" * ");
            }
            for(let j = parseInt(5/2) - i + 1 ; j>=0 ; j--){
                process.stdout.write(" - ");
            }
            console.log();
        }