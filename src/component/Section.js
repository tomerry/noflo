import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

class Section extends React.Component {
    render() {
        let sectionName = this.props.name;
        let classNames = [
            sectionName + '-section'
        ];

        if (!this.props.noTextJustify) {
            classNames.push('text-justify')
        }


        if (this.props.className) {
            classNames.push(this.props.className)
        }

        return (
            <section id={'section-' + sectionName} data-name={sectionName} className={classNames.join(' ')}>
                {this.props.hideHeader ? '' :
                    <header>
                        <h2><FormattedMessage id={'section.' + sectionName + '.title'}/></h2>
                        {this.props.subtitle ?
                            <h3><FormattedMessage id={'section.' + sectionName + '.subtitle'}/></h3> : ''}
                    </header>
                }
                {this.props.children}
            </section>
        );
    }

}

Section.propTypes = {
    name: PropTypes.string.isRequired,
    hideHeader: PropTypes.bool,
    subtitle: PropTypes.bool,
    noTextJustify: PropTypes.bool,
    className: PropTypes.string,
};


export default Section;