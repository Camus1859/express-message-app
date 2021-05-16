const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 5000;
const indexRouter = require('./routes/index')
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', indexRouter)







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err.message)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
