module.exports = function(app) {
  app.get('/', function(req, res, next) {
      res.send(['aloha', 'nui', 'maui']);
  });
}
