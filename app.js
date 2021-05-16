const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 5000;
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');
const app = express();
const path = require('path');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);
app.use(newRouter);

app.use(express.static(path.join(__dirname, 'public')));

//ccatch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
