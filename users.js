const express = require('express');
const router =express.Router();
const{User, validateUser} = require('../models/user');
const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const _ = require('lodash');

//Create account
router.post('/create-account', async (req, res)) => {
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user = await user.findOne({email: req.body.email});
    if(user) return res.status(400).send('A user with this email already exists');
})