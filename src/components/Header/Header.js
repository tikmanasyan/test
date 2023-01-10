import "./Header.css";
function Header(props) {
    
    return (
      <header>
        <h1>{props.text * props.num}</h1>
      </header>
  
    );
} 

export default Header;