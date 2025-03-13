import './Header.css';

const Header =() => {
  return (
    <div className="header-container">
      <h3 className="header-title">
      오늘은 📆
      </h3>
      <h1 className="header-date">
        {new Date().toDateString() }
      </h1>
    </div>
  )
}

export default Header