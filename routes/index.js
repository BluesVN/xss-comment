var express = require('express');
var router = express.Router();

var comments = {};//缓存区域

//构造编码过程中的函数
function html_encode(str) {
  var s = ''
  if (str.length === 0) return "";
  s = str.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/\s/g, "&nbsp;");//空格
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&#quot;");
  s = s.replace(/\n/g, "<br>");
  return s
}

/* GET home page. */
//req请求对象(Request) ,res响应对象(Response);
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/comment', function (req, res, next) {
  //正常应该连接数据库,这里用缓存演示;

  // comments.v = html_encode(req.query.comment);
  comments.v = req.query.comment;
  console.log('编码前', req.query.comment);

  console.log('编码后', comments.v);

});
//拉取评论接口
router.get('/getComment', function (req, res, next) {

  res.json({
    comment: comments.v
  })
})

module.exports = router;
