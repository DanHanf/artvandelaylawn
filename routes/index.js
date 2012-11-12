
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET pricing page.
 */

exports.pricing = function(req, res){
	res.render('pricing', {title: 'Express' });
};

/*
* GET contact page.
*/

exports.contact = function(req, res){
	res.render('contact', {title: 'Express'});
};

/*
* GET about page.
*/

exports.about = function(req, res){
	res.render('about', {title: 'Express'});
};