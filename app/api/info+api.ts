const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
    const url = new URL(request.url);
    const ids = url.searchParams.get("ids") || "";

    const response = await fetch(
        `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
        {
            headers: {
                "X-CMC_PRO_API_KEY": API_KEY!,
            },
        }
    );

    const res = await response.json();
    return Response.json(res.data);
    //   return Response.json(data);
}

const data = {
    "1": {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        category: "coin",
        description:
            "Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,645,193. The last known price of Bitcoin is 66,750.48093803 USD and is up 2.35 over the last 24 hours. It is currently trading on 10848 active market(s) with $75,693,606,050.91 traded over the last 24 hours. More information can be found at https://bitcoin.org/.",
        slug: "bitcoin",
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        subreddit: "bitcoin",
        notice: "",
        tags: [],
        "tag-names": [],
        "tag-groups": [],
        urls: {},
        platform: null,
        date_added: "2010-07-13T00:00:00.000Z",
        twitter_username: "",
        is_hidden: 0,
        date_launched: "2010-07-13T00:00:00.000Z",
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: false,
    },
    "825": {
        id: 825,
        name: "Tether USDt",
        symbol: "USDT",
        category: "token",
        description:
            "Tether USDt (USDT) is a cryptocurrency and operates on the Ethereum platform. Tether USDt has a current supply of 103,800,078,701.87814 with 100,044,694,548.97124 in circulation. The last known price of Tether USDt is 1.00048841 USD and is down -0.01 over the last 24 hours. It is currently trading on 76924 active market(s) with $138,946,065,853.46 traded over the last 24 hours. More information can be found at https://tether.to.",
        slug: "tether",
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        subreddit: "",
        notice: "",
        tags: [
            "payments",
            "stablecoin",
            "asset-backed-stablecoin",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "injective-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
            "optimism-ecosystem",
        ],
        "tag-names": [
            "Payments",
            "Stablecoin",
            "Asset-Backed Stablecoin",
            "Avalanche Ecosystem",
            "Solana Ecosystem",
            "Arbitrum Ecosystem",
            "Moonriver Ecosystem",
            "Injective Ecosystem",
            "BNB Chain",
            "USD Stablecoin",
            "Optimism Ecosystem",
        ],
        "tag-groups": [
            "INDUSTRY",
            "CATEGORY",
            "CATEGORY",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "PLATFORM",
            "CATEGORY",
            "PLATFORM",
        ],
        urls: {},
        platform: {
            id: "1027",
            name: "Ethereum",
            slug: "ethereum",
            symbol: "ETH",
            token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        },
        date_added: "2015-02-25T00:00:00.000Z",
        twitter_username: "tether_to",
        is_hidden: 0,
        date_launched: null,
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: true,
    },
    "1027": {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        category: "coin",
        description:
            "Ethereum (ETH) is a cryptocurrency . Ethereum has a current supply of 120,127,131.78995213. The last known price of Ethereum is 3,698.38075861 USD and is up 4.89 over the last 24 hours. It is currently trading on 8497 active market(s) with $31,574,788,707.07 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.",
        slug: "ethereum",
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        subreddit: "ethereum",
        notice: "",
        tags: [],
        "tag-names": [],
        "tag-groups": [],
        urls: {},
        platform: null,
        date_added: "2015-08-07T00:00:00.000Z",
        twitter_username: "ethereum",
        is_hidden: 0,
        date_launched: null,
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: true,
    },
    "1839": {
        id: 1839,
        name: "BNB",
        symbol: "BNB",
        category: "coin",
        description:
            "BNB (BNB) is a cryptocurrency . BNB has a current supply of 149,541,397.38261488. The last known price of BNB is 419.66183716 USD and is down -0.67 over the last 24 hours. It is currently trading on 2081 active market(s) with $2,547,806,853.73 traded over the last 24 hours. More information can be found at https://bnbchain.org/en.",
        slug: "bnb",
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        subreddit: "bnbchainofficial",
        notice: "",
        tags: [],
        "tag-names": [],
        "tag-groups": [],
        urls: {
            website: ["https://bnbchain.org/en"],
            twitter: ["https://twitter.com/bnbchain"],
            message_board: [],
            chat: ["https://t.me/BNBchaincommunity", "https://t.me/bnbchain"],
            facebook: [],
            explorer: [
                "https://explorer.bnbchain.org/",
                "https://bsctrace.com/",
                "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                "https://www.oklink.com/bsc",
            ],
            reddit: ["https://reddit.com/r/bnbchainofficial"],
            technical_doc: [],
            source_code: ["https://github.com/bnb-chain"],
            announcement: [],
        },
        platform: null,
        date_added: "2017-07-25T00:00:00.000Z",
        twitter_username: "bnbchain",
        is_hidden: 0,
        date_launched: null,
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: false,
    },
    "5426": {
        id: 5426,
        name: "Solana",
        symbol: "SOL",
        category: "coin",
        description:
            "Solana (SOL) is a cryptocurrency launched in 2020. Solana has a current supply of 571,041,563.3089167 with 442,315,505.4744836 in circulation. The last known price of Solana is 130.62033647 USD and is down -1.43 over the last 24 hours. It is currently trading on 631 active market(s) with $4,914,597,503.56 traded over the last 24 hours. More information can be found at https://solana.com.",
        slug: "solana",
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
        subreddit: "solana",
        notice: "",
        tags: [],
        "tag-names": [],
        "tag-groups": [],
        urls: {},
        platform: null,
        date_added: "2020-04-10T00:00:00.000Z",
        twitter_username: "solana",
        is_hidden: 0,
        date_launched: "2020-03-16T00:00:00.000Z",
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: true,
    },
};