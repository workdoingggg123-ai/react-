
function Navbar() {
  return (
   <>
   <nav className='navbar' >
        <div className="img-nav">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxQmBD59aPKsQzmX2XoaQbjaFBKTUpoFXGGMzm6eJ4Q&s=10" alt="img" />
        </div>
        <div className="nav-links">
        <a className="active" href="#">Home</a>
        <a href="../about/aboutpage.jsx">About</a>
        <a href="#">Contact</a>
        <a href="#">Github</a>
      </div>
<div>
  <h1>Heoo</h1>
</div>
       <div className="nav-buttons">
        <a href="#" className="login">
          Log in
        </a>

        <button className="get-started">
          Get started
        </button>
      </div>
   </nav>
   </>
  )
}
export default Navbar
