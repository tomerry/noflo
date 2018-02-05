import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import config from './../../config';
import lazyLoad from './../../services/lazy-load';

class CDNImage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            render: false
        }
    }

    componentDidMount() {
        lazyLoad.add(this.element, () => {
            this.setState({render: true})
        });
    }

    render() {
        if (this.state.render === false) {
            return (<img ref={(img) => this.element = img} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/>);
        }

        let {path, width, height, responsive, localized, className, locale} = this.props;

        let classNames = [];
        let parts = [path],
            queryString = '';

        if (localized) {
            parts.unshift('img/locale', locale);
        }
        if (config.cdnUrl) {
            if (config.assetVersion) {
                //prepend the version
                parts.unshift(config.assetVersion);
            }

            queryString = '?auto=compress';
            if (width) {
                queryString += '&w=' + width;
            }
            if (height) {
                queryString += '&h=' + height;
            }
            parts.unshift(config.cdnUrl);
        }

        if (className) {
            classNames.push(className);
        }

        if (responsive) {
            classNames.push('img-fluid');
        }

        return (
            <img src={parts.join('/') + queryString} className={classNames.join(' ')}/>
        );
    }

}

CDNImage.defaultProps = {
    responsive: true
};

CDNImage.propTypes = {
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    responsive: PropTypes.bool,
    localized: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        locale: state.locale.code
    }
};

export default connect(mapStateToProps)(CDNImage);