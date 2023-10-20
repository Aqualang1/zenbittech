const Button = (props) => {

    const { title, className, type } = props;

    return <button
        className={className}
        type={type}
    >
        {title}
    </button>
}

export default Button;