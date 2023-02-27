import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="blogItem">
      <div className="container">
        <h1 className="header">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-rule" />
    </li>
  )
}

export default BlogItem
