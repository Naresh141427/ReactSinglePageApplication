import './index.css'

import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="user-profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        className="profile"
        alt="profile"
      />
      <h1 className="profile-name">Wade Warren</h1>
      <p className="profile-description">Software developer at UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
