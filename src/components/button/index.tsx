import PropTypes from 'prop-types';
import './button.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
    nome: string;
    src: string;
}

const Button = (props: ButtonProps) => {
    return (
        <div className='button'>
            <Link to="/ingresso">
                {props.nome}
            </Link>
            <img src={props.src} />
        </div>
    )
}

Button.propTypes = {
    nome: PropTypes.string.isRequired,
};

export default Button