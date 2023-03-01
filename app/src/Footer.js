function Footer (props) {
    const {tasks} = props;
    if (tasks.length > 0) {
        return <p>Buttons!</p>;
    } else {
        return <p>Empty :(</p>;
    }
}

export default Footer;