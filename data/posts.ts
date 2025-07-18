import { Post } from "@/types/posts";

const posts: Post[] = [   
    {
        id: 1,
        title: "First Post",
        body: "This is the body of the first post.",    
        author: "Author One",
        date: "2023-10-01",
        comments: [
            {
                id: 1,
                text: "Great post!",
                username: "user1",
            },
            {   
                id: 2,
                text: "Thanks for sharing!",
                username: "user2",
            }
        ]
    },
    {
        id: 2,
        title: "Second Post",
        body: "This is the body of the second post.",
        author: "Author Two",
        date: "2023-10-02",
        comments: [
            {   
                id: 3,
                text: "Interesting read.",
                username: "user3",
            }
        ]
    },
    {   
        id: 3,
        title: "Third Post",
        body: "This is the body of the third post.",
        author: "Author Three",
        date: "2023-10-03",
        comments: []
    },          
    {
        id: 4,
        title: "Fourth Post",
        body: "This is the body of the fourth post.",
        author: "Author Four",
        date: "2023-10-04",
        comments: []
    },
    {
        id: 5,
        title: "Fifth Post",
        body: "This is the body of the fifth post.",
        author: "Author Five",
        date: "2023-10-05",
        comments: [
            {   
                id: 5,
                text: "Very informative.",
                username: "user5",
            },
            {   
                id: 6,
                text: "I learned a lot.",
                username: "user6",
            }
        ]
    },
    {
        id: 6,
        title: "Sixth Post",
        body: "This is the body of the sixth post.",
        author: "Author Six",
        date: "2023-10-06",
        comments: [
            {   
                id: 7,
                text: "Can't wait for more!",
                username: "user7",
            }
        ]
    },
    {   
        id: 7,
        title: "Seventh Post",
        body: "This is the body of the seventh post.",
        author: "Author Seven",
        date: "2023-10-07",
        comments: [
            {   
                id: 8,
                text: "This was helpful.",
                username: "user8",
            }
        ]
    },
    {   
        id: 8,
        title: "Eighth Post",
        body: "This is the body of the eighth post.",
        author: "Author Eight", 
        date: "2023-10-08",
        comments: [
            {   
                id: 9,
                text: "Great insights!",
                username: "user9",
            }
        ]
    },
    {   
        id: 9,
        title: "Ninth Post",
        body: "This is the body of the ninth post.",
        author: "Author Nine",
        date: "2023-10-09",
        comments: []
    },
    {   
        id: 10,
        title: "Tenth Post",
        body: "This is the body of the tenth post.",
        author: "Author Ten",
        date: "2023-10-10",
        comments: [
            {   
                id: 10,
                text: "Amazing content!",
                username: "user10",
            }
        ]
    },
    {   
        id: 11,
        title: "Eleventh Post",
        body: "This is the body of the eleventh post.",
        author: "Author Eleven",
        date: "2023-10-11",
        comments: [
            {                
                id: 11,
                text: "Very well written.",
                username: "user11",
            }
        ]
    },
    {   
        
        id: 12,
        title: "Twelfth Post",
        body: "This is the body of the twelfth post.",
        author: "Author Twelve",
        date: "2023-10-12",
        comments: [
            {                
                id: 12,
                text: "I appreciate the effort.",
                username: "user12",
            }
        ]   
    },
    {   
        id: 13,
        title: "Thirteenth Post",
        body: "This is the body of the thirteenth post.",
        author: "Author Thirteen",
        date: "2023-10-13",
        comments: [
            {                
                id: 13,
                text: "This was very useful.",
                username: "user13",
            }
        ]
    },
    {   
        id: 14,
        title: "Fourteenth Post",
        body: "This is the body of the fourteenth post.",
        author: "Author Fourteen",
        date: "2023-10-14",
        comments: []
    },
    {   
        id: 15,        
        title: "Fifteenth Post",
        body: "This is the body of the fifteenth post.",
        author: "Author Fifteen",
        date: "2023-10-15",
        comments: [
            {   
                id: 15,        
                text: "Excellent work!",
                username: "user15",
            }
        ]
    },
    {   
        id: 16,
        title: "Sixteenth Post",
        body: "This is the body of the sixteenth post.",
        author: "Author Sixteen",
        date: "2023-10-16",
        comments: [
            {                
                id: 16,
                text: "I really enjoyed this.",
                username: "user16",
            }
        ]
    },
    {        
        id: 17,
        title: "Seventeenth Post",
        body: "This is the body of the seventeenth post.",
        author: "Author Seventeen",
        date: "2023-10-17",
        comments: [
            {                
                id: 17,
                text: "This is fantastic!",
                username: "user17",
            }
        ]
    },
    {        
        id: 18,
        title: "Eighteenth Post",
        body: "This is the body of the eighteenth post.",
        author: "Author Eighteen",
        date: "2023-10-18",
        comments: [
            {                
                id: 18,
                text: "Very insightful.",
                username: "user18",
            }
        ]
    },
    {        
        id: 19,
        title: "Nineteenth Post",
        body: "This is the body of the nineteenth post.",
        author: "Author Nineteen",
        date: "2023-10-19",
        comments: [
            {                
                id: 19,
                text: "I learned a lot from this.",
                username: "user19",
            }
        ]
    },
    {        
        id: 20,
        title: "Twentieth Post",    
        body: "This is the body of the twentieth post.",
        author: "Author Twenty",
        date: "2023-10-20",
        comments: []
    }
]

export default posts;
