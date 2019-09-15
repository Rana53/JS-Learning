const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require("../models/user");

router.post('/signup', (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(user =>{
    if(user.length >= 1){  // if i not put 1 it should always true because user take empty array so it's not null
      return res.status(404).json({ message: "User already exist"});
    }
    else{
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          return res.status(500).json({ error: err});
        }
        else{
          const user = new User({
            _id: mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
          });
          user.save()
          .then(result =>{
            console.log(result);
            res.status(200).json(result);
          })
          .catch(err =>{
            res.status(500).json({ error: err})
          });
        }
      });
    }
  })
  .catch(err =>{
    res.status(500).json({ error: err})
  });
});
router.delete('/:userId', (req, res, err)=>{
  User.deleteOne({_id: req.params.userId})
  .exec()
  .then(result =>{
      if(result.deletedCount > 0)
          res.status(200).json({ message: "User deleted", result : result});
      else
          res.status(200).json({ message: "User data not found", result : result});
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({ error: err});
  });
});

module.exports = router;
