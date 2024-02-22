const resolvers = {
    Query: {
        
    },
    Mutation: {
        login: async (_, { username, password }) => {
            
            const user = users.find(user => user.username === username);
            
            if (!user || !(await bcryptjs.compare(password, user.password))) {
                throw new Error('Invalid login');
            }

            const token = jsonwebtoken.sign(
                { id: user.id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );

            return { token, user };
        }
    }
};