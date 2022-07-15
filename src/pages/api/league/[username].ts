import { NextApiResponse } from 'next/dist/shared/lib/utils';

export default async function handler(
    { query: { username } },
    res: NextApiResponse
) {
    await fetch(
        `https://${process.env['EUW_URL']}/lol/league/v4/entries/by-summoner/${username}${process.env.API_KEY}`
    )
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            res.json(json);
        })
        .catch((error) => {
            throw error;
        });
}
