import {USERS} from './Users'
export const POSTS = [
    {
        imageUrl :'https://m.media-amazon.com/images/M/MV5BODJkZTM3MWYtOTkxNS00YWUxLTg5NjAtOTk4ZWM5MTBmMzAyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UY562_CR9,0,380,562_.jpg',
        user : USERS[0].user,
        likes : 189,
        caption : 'Solo levelling is one of the best anime of 2024',
        profile_picture : USERS[0].image,
        comments : [
            {
                user : USERS[1].user,
                comment : 'woww super🔥✨ Will definitely recommend to wath but spoiler alert all your fav characters die😢'
            },
            {
                user: USERS[0].user,
                comment: 'do you have any other recommendations? comment down',
            }
        ]
    },
    {
        imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-ffb2572b558f5022d1985569688c8666-lq',
        user: USERS[1].user,
        likes: 1000,
        caption: 'gojo satoru is one of the most famous anime characters mostly known for his beautiful blue eyes',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: USERS[0].user,
                comment: 'slay',
            }
        ]
    },
    {
        imageUrl: 'https://assets-global.website-files.com/6461dd519a5f8f48f550b20a/6492adc8e40138d6dc5df2b2_Image-8-1024x576.png',
        user: USERS[0].user,
        likes: 250,
        caption: 'After effects timeline',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[1].user,
                comment: 'WOW',
            }
        ]

    }
]