import PropTypes from 'prop-types'
import '../App.scss';

const Quote = ({ info }) => {
    return (
        <div className="Quote" style={{color: info.textColor, backgroundColor: info.cardColor}}>
            <h1>{info.name}</h1>
            <p>{info.slogan}</p>
        </div>
    )
}

Quote.defaultProps = {
    info: {}
}

Quote.propTypes = {
    info: PropTypes.object.isRequired
}

export default Quote