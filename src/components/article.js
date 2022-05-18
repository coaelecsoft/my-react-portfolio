function Article(props) {
    return (
        <li>
            <figure>
                <img alt={props.picture} src={require(`${props.picture}`)} />
            </figure>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    )
}
export default Article