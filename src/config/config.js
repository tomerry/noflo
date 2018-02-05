module.exports = {
    preSaleStartDate:    1512864000,
    publicSaleStartDate: 1515542400, //Wed, 10 Jan 2018 00:00:00 +0000
    publicSaleEndDate:   1518220800, //Sat, 10 Feb 2018 00:00:00 +0000

    infuraUrl: 'https://mainnet.infura.io',
    progressUrl: 'https://bpomrn37x7.execute-api.eu-central-1.amazonaws.com/production',
    contracts: {
        Token:     '0xf44745fBd41F6A1ba151df190db0564c5fCc4410',
        TokenSale: '0xF04436B2eDaa1B777045E1EEFc6DBA8bD2aEbAB8'
    },

    bonusStages: [
        //+1 second just to make it in sync with the main countdown!!!
        {
            endTime: 1516665599 + 1, //2018-01-22T23:59:59+00:00
            img: '/img/public-sale-bonus-30.png',
            bonus: 0.30,
            text: 'From Jan. 10th – Jan. 22nd every investor will receive 30% bonus tokens!'
        },
        {
            endTime: 1517270399 + 1, //2018-01-29T23:59:59+00:00
            bonus: 0.20,
            img: '/img/public-sale-bonus-20.png',
            text: 'From Jan. 23rd – Jan. 29th every investor will receive 20% bonus tokens!'
        },
        {
            endTime: 1517875199 + 1, //2018-02-05T23:23:59+00:00
            bonus: 0.10,
            img: '/img/public-sale-bonus-10.png',
            text: 'From Jan. 30th – Feb. 05th every investor will receive 10% bonus tokens!'
        }
    ]
};
