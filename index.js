import app from './app';

app.listen(app.get('port'), () => {
  console.log(`app running on port:${app.get('port')}`);
});
