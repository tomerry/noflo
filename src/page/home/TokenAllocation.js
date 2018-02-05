import * as React from 'react';
import Section from '../../component/Section';
import {Table} from 'reactstrap';
import {FormattedMessage} from 'react-intl';
import CDNImage from '../../component/util/CDNImage';

class TokenAllocation extends React.Component {


    render() {
        return (
            <Section name="token-allocation">

                {/*<CDNImage width={1100} path="token-allocation.png" localized/>*/}

                <Table bordered={true} responsive={true} className="mt-5">
                    <thead>
                    <tr className="row-1">
                        <th/>
                        <th><FormattedMessage id="section.token-allocation.distribution"/></th>
                        <th><FormattedMessage id="section.token-allocation.token"/></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="row-2">
                        <td>pre-sale</td>
                        <td>7.8%</td>
                        <td>7 837 746</td>
                    </tr>
                    <tr className="row-5">
                        <td><FormattedMessage id="section.token-allocation.publicSale"/></td>
                        <td>52.2%</td>
                        <td>52 162 254</td>
                    </tr>
                    <tr className="row-6">
                        <td>bounties</td>
                        <td>1.5%</td>
                        <td>1 500 000</td>
                    </tr>
                    <tr className="row-6">
                        <td><FormattedMessage id="section.token-allocation.founders"/></td>
                        <td>18.5%</td>
                        <td>18 500 000</td>
                    </tr>
                    <tr className="row-7">
                        <td className="development-tokens">
                            <div>

                                <FormattedMessage id="section.token-allocation.blockchain"/>

                                <small><FormattedMessage id="section.token-allocation.released"/></small>
                            </div>
                        </td>
                        <td>20%</td>
                        <td>20 000 000</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr className="row-8">
                        <td><FormattedMessage id="section.token-allocation.total"/></td>
                        <td>100%</td>
                        <td>100 000 000</td>
                    </tr>
                    </tfoot>
                </Table>
                <p>
                    <FormattedMessage id="section.token-allocation.distribution-text"/>
                </p>
            </Section>
        );
    }

}


export default TokenAllocation;



// WEBPACK FOOTER //
// ./src/page/home/TokenAllocation.js