import express, {Request, Response} from 'express' ;

const app = express();

app.get('/', (req: Request, res: Response) => {
    let helloWorld = 'Hello motherFucker!!!!';
    res.send(helloWorld);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});