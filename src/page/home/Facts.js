import * as React from 'react';
import {Table, Row} from 'reactstrap';

import Section from '../../component/Section';
import {connect} from 'react-redux';
import bonus from '../../services/bonus';
import config from '../../config';
import Countdown from '../../component/countdown/Countdown';
import {FormattedMessage} from 'react-intl';

class Facts extends React.Component {
    renderTokensPerEther() {
        const progress = this.props.progress;
        if (!progress || !progress.tokensPerEther) {
            return null;
        }

        return (
            <div>
                <span>{progress.tokensPerEther.toFormat(0)} CPY/ETH</span>
                {this.renderBonus()}
            </div>
        );
    }

    renderBonus() {
        let bonusCpy = bonus.getBonusCpy();
        if (bonusCpy === 0) {
            return null;
        }
        return (<div>+ <br />{bonusCpy} Bonus CPY/ETH</div>)
    }

    render() {
        return (
            <Section name="facts" hideHeader>
                <header>
                    <h2>Fact Sheet</h2>
                </header>

                <Table bordered={false} responsive className="fact-sheet">
                    <thead>
                    <tr>
                        <th>Token Price</th>
                        <th>Hard Cap</th>
                        <th>Minimum <br/>Investment</th>
                        <th>Maximum <br/>Investment</th>
                        <th>CPY Sale Ending</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {this.renderTokensPerEther()}
                        </td>
                        <td>60M CPY</td>
                        <td>0.1 ETH</td>
                        <td>2 500 ETH</td>
                        <td>February 09, 2018 <br/>23:59:59 UTC
                        </td>
                    </tr>
                    </tbody>
                </Table>

            </Section>
        )
    }
}


const mapStateToProps = (state) => {
    const tokenSaleProgress = state.web3.contract.tokenSaleProgress;
    return {
        progress: tokenSaleProgress
    };
};


export default connect(mapStateToProps)(Facts);