// Returns the title, at the top of the application
// Doesn't really need to be its own component, but it could be dynamic in 
// the future. Would need to bring state up to App to make that work

function Header () {
    return (
        <div className="row">
            <div className="col text-center">
                <h1 id="title" className="display-1 text-muted">to-do</h1>
            </div>
        </div>
    );
}

export default Header;