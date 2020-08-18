const {Router} = require('express')
const todoModel = require('../models/todo')
const router = Router();

/**
 * Fetch all tacks
 */
router.get('/', async (req, res) => {
  try {
   const todos=await todoModel.findAll();
    res.status(200).json(todos);
  } catch (e) {
    console.log(e);
    res.status((500)).json({message: 'Server error'})
  }
})
/**
 * Create new tack
 */
router.post('/', async (req, res) => {
  try {
    const newTask = await todoModel.create({
      title: req.body.title,
      done: false
    });
    res.status(200).json(newTask);
  } catch (e) {
    console.log(e);
    res.status((500)).json({message: 'Server error'})
  }
})
/**
 * Change task
 */
router.put('/:id', async (req, res) => {
  try {
    const task = await todoModel.findByPk(req.params.id);
    task.dode = req.body.done;
    await task.save();
    res.status(200).json(task);
  } catch (e) {
    console.log(e);
    res.status((500)).json({message: 'Server error'})
  }
})
/**
 * Mark as a deleted
 */
router.delete('/:id', async (req, res) => {
  try {
    const tasks = todoModel.findAll({
      where: {
        id: req.params.id
      }
    });
    await tasks[0].destroy();
    res.status(204).json({});
  } catch (e) {
    console.log(e);
    res.status((500)).json({message: 'Server error'})
  }
})
module.exports = router
