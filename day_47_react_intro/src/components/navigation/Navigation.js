import "./Navigation.css";

// das hier ist eine Component
function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Impressum</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navigation;