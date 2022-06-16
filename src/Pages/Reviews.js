import React from "react";
import Review from "../Components/Review";

function Reviews() {
    const data = [
        {
            header: 'https://preview.redd.it/7wggeu7394my.jpg?auto=webp&s=330f791930a2cc91e136f8c13349a833ed9d7310',
            title: 'Review 1',
            excerpt: '"Needed a new streaming pc that could handle whatever I threw at it! That is when Stince Built came in, my best pick to get the job done! Communication was A+ during the building process and pickg up was easy and flawlessly. I use the PC to help with content on my Youtube Channel with over 750,000 Subscribers. I am loving the the Rig! Highly recommend, done fast, done right! "',
            profile_img: 'https://randomuser.me/api/portraits/men/44.jpg',
            aname: 'John Doe',
            date: 'Apr 20, 2022'
        },
        {
            header: 'https://i.pcmag.com/imagery/roundups/00DuEK0BDIXkfrudGxcIKo6-8..v1569470765.png',
            title: 'Review 2',
            excerpt: '"I was in the market for a custom gaming/streaming setup for my son. He had some specific requests as far as specs but it was all gibberish to me. When I contacted Jeff, I was overwhelmed but he was so helpful! He graciously answered my questions, stayed under budget, was always super quick to respond, , and delivered and set everything up with a one week turn around start to finish!"',
            profile_img: 'https://randomuser.me/api/portraits/women/44.jpg',
            aname: 'Alisha Smith',
            date: 'May 2, 2022'
        },
        {
            header: 'https://u-mercari-images.mercdn.net/photos/m58095275615_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1636864509',
            title: 'Review 3',
            excerpt: '"I have had my computer for about 2 weeks now! I am absolutely in love with it! It is my first gaming PC, and all I have to say if you are looking into getting a computer, I would all the way recommend Jeff at Stince Built! He was very amazing through the entire process. He let me know when my parts arrived and sent me pictures. He was very kind, and answered all of my questions, and provided me with all the details I needed! Big shout out to Jeff and his amazing skills!"',
            profile_img: 'https://randomuser.me/api/portraits/women/45.jpg',
            aname: 'Jordan Leigh Wagner',
            date: 'May 10, 2022'
        }
    ]
    return (
        <main className="reviews">
            <Review data={data[0]}></Review>
            <Review data={data[1]}></Review>
            <Review data={data[2]}></Review>
        </main>
    )
}

export default Reviews