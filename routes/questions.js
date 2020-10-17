const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
// Question Model
const Question = require('../models/Question')

//@route    GET api/questions
//@desc     Get all questions
//@access   Public
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    if(!questions) throw Error('No questions')

    res.status(200).json(questions)
  } catch (err) {
    res.status(400).json({ msg: err.message})
  }
})

//@route    POST api/questions
//@desc     Create a question
//@access   Public
router.post('/', async (req, res) => {
  const newQuestion = new Question({
    question: req.body.question
  });
  try {
    const question = await newQuestion.save()
    if(!question) throw Error('Something went wrong saving the question')

    res.status(200).json(question)
  } catch (err) {
    res.status(400).json({ msg: err.message})
  }
})

//@route    PUT api/questions/:id
//@desc     Update question
//@access   Public
router.put('/:id', async (req, res) => {
  res.send('Update a question')
})

//@route    DELETE api/questions/:id
//@desc     Update question
//@access   Public
router.delete('/:id', auth, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if(!question) throw Error('No question found');

    const removed = await question.remove();
    if(!removed)
      throw Error('Something went wrong while trying to delete the question');

      res.status(200).json({ success: true})
  } catch (err) {
    res.status(400).json({ msg: err.message, success: false})
  }
})

module.exports = router;