import { createState } from '@hookstate/core';

export default createState({
    user: {
        login: 'LoginString',
        email: 'admin@example.com'
    },
    groups: [
        { members: 2 },
        { members: 3 }
    ],
    tasks: {
        today: [
            { id: 1, name: 'First Task' },
            { id: 2, name: 'Second Task' },
            { id: 3, name: 'Third Task' },
        ]
    }
});
