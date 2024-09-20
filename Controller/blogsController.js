const Blogs = require("../models/blogs");

exports.createBlog = async (req, res) => {
  const { formData } = req.body;
  try {
    const blog = new Blogs(formData);
    await blog.save();
    res.status(200).json({ message: "Blog created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    if (blogs.length > 0) {
      res.status(200).json(blogs);
    } else {
      res.status(404).json({ message: "Blogs not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { formData } = req.body;
  try {
    const blog = await Blogs.findByIdAndUpdate(id, formData, { new: true });
    if (blog) {
      res.status(200).json({ message: "Blog updated successfully" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blogs.findByIdAndDelete(id);
    if (blog) {
      res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
