const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

let links = [{
        id: 'link-0',
        description: 'Facebook is most social have been used on the world.',
        url: 'https://www.facebook.com/'
    },
    {
        id: 'link-1',
        description: 'Nike is nice.',
        url: 'https://www.nike.com/vn/'
    }
]

const resolvers = {
    Query: {
        info: () => 'This is the Facebook social',
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            let idCount = links.length

            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    }
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf-8'
    ),
    resolvers,
})

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );