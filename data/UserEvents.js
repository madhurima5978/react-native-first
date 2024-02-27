import {USERS} from './Users'
export const EVENTS = [
    {
        eventName: 'Tech Summit 2024',
        desc: 'Event of yuga 2024',
        user : USERS[0].user,
        profile_picture : USERS[0].image,
        
        location: 'Convention Center',
        date: '2024-05-15',
        time: '10:00 AM',
        registrations: '20',
        attendees: [
            {
                user: USERS[0].user,
                profile_picture: USERS[0].image,
            },
            {
                user: USERS[1].user,
                profile_picture: USERS[1].image,
            }
        ]
    },
    {
        eventName: 'Hackathon Challenge',
        desc:'JNTU sultanpur hackahon challenge register below',
        user : USERS[1].user,
        profile_picture : USERS[1].image,
        imageUrl: 'https://lh3.googleusercontent.com/proxy/liwqAHg6xNMuEBcRdrQw2voDKY6Q3YLuFTl-7SCi7eopAu78EpACECJ7JAWsRDW_vLj5mEOc0PVNJEwQykJqQNOS3Aw',
        location: 'Innovation Hub',
        date: '2024-06-02',
        time: '2:30 PM',
        registrations: '40',
        attendees: [
            {
                user: USERS[0].user,
                profile_picture: USERS[0].image,
            },
            {
                user: USERS[1].user,
                profile_picture: USERS[1].image,
            }
        ]
    },
    // Add more events as needed
];
