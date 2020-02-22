let flops = 0;
let peanoI = (x, y) => {
    if (x > y) {
        let z = y;
        y = x;
        x = z;
    }
    if (x === 0) {
        console.log('result: ' + y);
        console.log(' flops: ' + flops);
        return y;
    } else {
        flops = flops + 2;
        console.log(x + ' + ' + y);
        peanoI((x - 1), (y + 1));
        
    }
}
let y2 = 0;
let peanoR = (x, y) => {
    if (x > y) {
        let z = y;
        y = x;
        x = z;
    }
    if (x === 0) {
        y = y + y2
        console.log('result: ' + y);
        console.log(' flops: ' + flops);
        return y;
    } else {
        flops = flops + 2;
        console.log(y2 + ' + ' + x + ' + ' + y);
        y2++;
        peanoR((x - 1), y);
        
    }
}
peanoI(30, 40);
console.log('');
peanoR(30, 40);