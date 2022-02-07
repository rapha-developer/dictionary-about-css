function Snippet(props) {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.snippet }} />
        </div>
    );
}
export default Snippet