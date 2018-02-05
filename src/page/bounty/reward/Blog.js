import * as React from 'react';
import {Alert} from 'reactstrap';
import CurrencyConverter from '../../../component/CurrencyConverter';


class Blog extends React.Component {


    render() {
        return (
            <div>
                <h4>WRITE ABOUT COPYTRACK ICO IN YOUR BLOG (10%)</h4>
                <h6>100 000 CPY = 135.14 ETH = <CurrencyConverter amount={135.14}/></h6>
                <p className="mt-3">
                    If you are big media or a trendsetter, please refer to the Media Publications campaign.
                    This campaign is for private users only.
                </p>
                <p>
                    Write a post about COPYTRACK in any language, with at least 1000 characters that contain two links to
                    copytrack.io.
                </p>


                <p>It can be your blog or your social media pages, such as Facebook or LinkedIn. The article should be available
                    on the Internet. To rank your article, we will check the popularity of your blog and the quality of content.
                    The total amount of CPY tokens distributed in this category is 100 000 CPY.</p>

                <p className="mt-5">
                    <strong>Send your article through <a href="https://copytrack.typeform.com/to/Yk9sOh" target="_blank">this
                        form</a></strong>
                </p>
                {/*
                 <ol>
                 <li>Check your rewards here: <a
                 href="https://docs.google.com/spreadsheets/d/1vb1of25QhCvdUfzUcSFiVigCmmvFvjz-FUdpYHRJpf8/edit?usp=sharing"
                 target="_blank">blog article spreadsheet</a>
                 </li>
                 </ol>
                 */}
                <div className="reward mt-5">
                    <h6>Rewards:</h6>
                    <p>We will class each article depending on the media outlet and its reach and give away stakes
                        accordingly</p>
                </div>

                <Alert color="info">
                    <p>
                        Special rewards reserved for:<br/>
                        Original article/review posted to top media, 10k characters or more. Original explainer video artwork
                        posted
                        to a high traffic channel, 3 minutes long or more. Please contact us by ico@copytrack.io
                    </p>
                </Alert>
            </div>
        );
    }

}


export default Blog;



// WEBPACK FOOTER //
// ./src/page/bounty/reward/Blog.js