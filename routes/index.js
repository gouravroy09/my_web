
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('myweb', { title: 'Express' });
};