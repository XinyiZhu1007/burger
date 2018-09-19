var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  var notEatenData = [];
  var eatenData = [];
  burger.selectAll(function(data){
      data.forEach(function(element) {
          if(element.devoured == 0) {
            notEatenData.push(element);
          }else{
              eatenData.push(element);
          };
      });
      var allData = {
          newBurger: notEatenData, 
          eatenBurger: eatenData
      };
    //   console.log(allData);
      //send it all to the index.handlebars
      res.render('index', allData);
  });    
});


router.post('/create', function(req, res){
  console.log(req);
  burger.insertOne(req.body.name, function(){
    res.redirect('/');
  });
});

router.put('/update/:id', function(req, res){
    console.log(req.body.devoured);
    console.log(req.params.id);
    burger.updateOne(req.params.id, function(data){
        res.redirect('/');
    });
});

// router.delete('/delete/:id', function(req, res){
//   burger.deleteOne([req.params.id], function(){
//     res.redirect('/');
//   });
// });

module.exports = router;