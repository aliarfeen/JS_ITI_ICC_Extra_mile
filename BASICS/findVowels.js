function findVowels(str) {
    let n = str.length;
    let counter = 0;
    let vowels = [];
    const regex = /[aeiouy]/i;

    for (let i = 0; i < n; i++) {
        if (regex.test(str.charAt(i))) { 
            vowels.push(str.charAt(i));
            counter++;
        }
    }

    console.log(`Number of vowels is ${counter} where vowels are ${vowels.join(", ")}`);
}

findVowels(" I hate JS"); 