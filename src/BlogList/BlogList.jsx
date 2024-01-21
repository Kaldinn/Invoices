import React from 'react'

const BlogList = (props) => {
    const blogs = props.blogs
    const blogsTitle = props.blogsTitle
    console.log(blogsTitle)

  return (
    <div className='blog-list'>
    <h2>{ blogsTitle }</h2>

    {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by { blog.author }</p>
        <button onClick={()=> props.handleDelete(blog.id)}>Delete Blog</button>
        </div>
    ))}
    </div>
  )
}

export default BlogList