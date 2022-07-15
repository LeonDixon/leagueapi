import { Box } from '@chakra-ui/react';
import { throws } from 'assert';
import { NextApiResponse } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fetcher from '../../../lib/fetcher';

export default function Profile() {
    const router: NextRouter = useRouter();
    let [data, setData] = useState(null);
    useEffect(function mount() {
        async function fetchData() {
            await fetcher(`/league/${username}`)
                .then((res: NextApiResponse) => {
                    setData(res);
                })
                .catch((error) => {
                    throw error;
                });
        }

        fetchData();
    }, []);

    const { username } = router.query;
    return (
        <Box>
            {data != null && (
                <Box>
                    <Box>{data.name}</Box>
                    <Box>{data.summonerLevel}</Box>
                    <Box></Box>
                </Box>
            )}
        </Box>
    );
}
