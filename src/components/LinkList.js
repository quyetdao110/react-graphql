import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql `
    {
        feed{
            id
            description
            url
        }
    }
`;

const LinkList = () => {
    const { data } = useQuery(QUERY);
    return ( <
        div > {
            data && ( <
                >
                {
                    data.feed.map((link) => ( <
                        Link key = { link.id }
                        link = { link }
                        />
                    ))
                } <
                />
            )
        } <
        /div>
    );
};
export default LinkList;