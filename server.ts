import express from 'express';
import morgan from 'morgan';
// import path from 'path';
// import openUrl from 'open';

const app = express();

const PORT: string | number = process.env.PORT || 3001;

app.use(morgan('dev'));

app.use(express.static('public'));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

app.listen(PORT, () => {
    // openUrl('http://localhost:' + PORT);
    console.log("Express started on port " + PORT);
});
