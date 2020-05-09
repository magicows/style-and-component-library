import '../styles/header.scss'

export default function Header() {
    return (
      <div className="header">
        
        <div className="header__title">
            Component Library - {new Date().getFullMonth(), new Date().getFullYear()}
        </div>
      </div>
    );
  }