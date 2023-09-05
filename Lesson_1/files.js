// // Let's explore FileSystem in NodeJS: Small Files

// const fs = require('fs');

// // Reading files

// // fs.readFile('./docs/mydoc.txt', (err, data) => {
// //     if (err) {
// //         console.log(err);
// //     }
// //     console.log(data.toString());
// // });


// // WRITING FILES

// // fs.writeFile('./docs/mydoc.txt', 'Hello World', () => {
// //     console.log('File was written')
// // });

// // // When we change the file name and it doesn't exist, the file is created

// // fs.writeFile('./docs/mydoc2.txt', 'Hello Again', () => {
// //     console.log('File was written');
// // });

// // DIRECTORIES. Makes a new dir if it doesn't exists and deletes it if it exists

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder created')
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder deleted');
    });
}

// DELETING FILES

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    });
} else {
    console.log('File does not exist or File already deleted')        
};