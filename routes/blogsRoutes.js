const express = require('express');

const router = express.Router();

const {createBlog, getBlogs, updateBlog, deleteBlog} = require('../Controller/blogsController')


// ------- blogs routes --------------------------------

router.post('/createBlog', createBlog);
router.get('/getBlogs', getBlogs);
router.put('/updateBlog', updateBlog);
router.delete('/deleteBlog', deleteBlog);


module.exports = router; 