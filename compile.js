    const path = require('path');
    const fs = require('fs');
    const solc = require('solc');

    const complilePath = path.resolve(__dirname, 'contracts', 'books.sol');
    const source = fs.readFileSync(complilePath, 'UTF-8');

    console.log(solc.compile(source, 1));
