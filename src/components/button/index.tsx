import PropTypes from 'prop-types';
import './button.scss';

interface ButtonProps {
    nome: string;
    src: string;
}

const Button = ( props: ButtonProps ) => {
    return (
        <div className='button'>
            {props.nome}
            <img src={props.src}/>
        </div>
    )
}

Button.propTypes = {
    nome: PropTypes.string.isRequired,
};

export default Button