import React, { useEffect } from 'react';
import '../App.css';
import Nav from '../sections/Nav';
import Footer from '../sections/footer';
import ManhwaCard from '../manhwa_2/Card';

function Page2() {
    
    useEffect(() => {
        
        const handleLinkClick = (event) => {
            const targetId = event.currentTarget.getAttribute("href").substring(1); // Remove the '#' from href
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault(); // Prevent default anchor behavior
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
            }
        };

        
        const links = document.querySelectorAll('.table_of_content a');
        links.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return (
        <div>
            <Nav />
            <div className='content-container'>
                <div className="headline">
                    <h1>The 10 Best Supernatural Manhwa You Should Read Now</h1>
                    <p>Supernatural is a popular genre in Korean manhwa. From Tower of God to Noblesse, here are the 10 best supernatural manhwa you must read.</p>
                </div>

                <section className="hero">
                    <img src='./img2/b2.png' alt="Background" />
                </section>

                <section className='intro'>
                    <p>
                        Supernatural manhwa is a sub-genre of fantasy manhwa and covers tales from towers to seas. If you are bored of scrolling the same action and romance manhwas, it’s time to explore the fantasy genre finally. Moreover, the supernatural webtoon offers a taste of the mundane and the unique, immersing readers in a mystical world. From Noblesse to Tower of God and Leviathan to DICE, here are the 10 best supernatural manhwa you must explore.
                    </p>
                </section>

                <section className='table_of_content'>
                    <details>
                        <summary>Table of Contents</summary>
                        <ol>
                            <li><a href="#leviathan">1. Best Supernatural Manhwa – Leviathan</a></li>
                            <li><a href="#tower_of_god">2. Tower of God</a></li>
                            <li><a href="#leveling_up_with_gods">3. Leveling Up with the Gods</a></li>
                            <li><a href="#existence">4. Existence</a></li>
                            <li><a href="#the_breaker">5. The Breaker</a></li>
                            <li><a href="#first_hunter">6. The First Hunter</a></li>
                            <li><a href="#noblesse">7. Noblesse</a></li>
                            <li><a href="#ultimate_outcast">8. Ultimate Outcast</a></li>
                            <li><a href="#unholy_blood">9. Unholy Blood</a></li>
                            <li><a href="#dice">10. Dice: The Cube that Changes Everything</a></li>
                        </ol>
                    </details>
                </section>

                <section className='manhwa-list'>
                    <ManhwaCard
                        id="leviathan"
                        title="1. Best Supernatural Manhwa – Leviathan"
                        imageSrc="/img2/m1.png"
                        writer="Gyeong-tak LEE, Mi-young NOH"
                        genre="Sci-Fi, Horror, Action"
                        releaseYears="2018-2022"
                        description="The protagonist, Bota, and his family live on a small boat because the water has risen and captured the dry lands. So, they search for food and more from the underwater cities. Leviathan follows the survival journey of the siblings Bota and Rita Ma following the murder of their father at the hands of a sea monster. Following a near-lethal encounter with a monster, Bota and Rita are taken in by Kana, an acquaintance of Teon Ma, their late father. Eventually, a tragic twist in the narrative, Bota, Rita, and Kana find themselves battling for the survival of humanity."
                    />

                    <ManhwaCard
                        id="tower_of_god"
                        title="2. Tower of God"
                        imageSrc="/img2/m1.png"
                        writer="SIU"
                        genre="Fantasy, Action"
                        releaseYears="2010-Present"
                        description="The Tower of God revolves around Twenty-Fifth Baam, who spends most of his early life stuck beneath the titular tower. While looking for his friend Rachel, he climbs the mysterious tower. What he will discover in his quest to find his friend is also beyond anything he could have imagined. Moreover, the more he climbs, the more difficult it gets, as each floor offers him a new obstacle that he has to overcome to keep climbing. Baam needs to succeed in all these challenges to reach the peak of the Tower eventually."
                    />

                    <ManhwaCard
                        id="leveling_up_with_gods"
                        title="3. Leveling Up with the Gods"
                        imageSrc="/img2/m1.png"
                        writer="Black Ajin"
                        genre="Action, Fantasy"
                        releaseYears="2020-Present"
                        description="Leveling Up with the Gods is undoubtedly one of the best supernatural manhwa. It centres on Kim Yuwon, who, after losing the battle against the Outer Gods, is offered another opportunity and sent back into the past. Now, back to the time before the war, Yuwon has only one objective – to eventually climb the Tower and become the strongest to avert the potential destruction. If you liked Tower of God, you must read Leveling Up With the Gods."
                    />

                    <ManhwaCard
                        id="existence"
                        title="4. Existence"
                        imageSrc="/img2/m1.png"
                        writer="Yi Rang"
                        genre="Fantasy, Action"
                        releaseYears="2021-Present"
                        description="Existence follows the central character Lee Jan-In, who has experienced countless lives as a different species being before being born as a human. With each life, he questions the objective of his constant reincarnation. After being born as a human with all the memories of his previous life, he understands the purpose of his existence, and that is the extermination of humanity. However, soon after experiencing the intricacies of human life, he eventually begins to question the meaning of his life."
                    />

                    <ManhwaCard
                        id="the_breaker"
                        title="5. The Breaker"
                        imageSrc="/img2/m1.png"
                        writer="Jeon Geuk-jin"
                        genre="Action, Martial Arts"
                        releaseYears="2007-2010"
                        description="The Breaker, in particular, follows the central character of the manhwa Lee Shi-Woon. After witnessing the fighting abilities of his new English teacher, Chun Woo, Lee finds a ray of hope to alter his life from constant bullying. With the hope of escaping his life, Shi-Woon finally convinces his teacher to take him as his disciple. However, what Shi-Woon considers an escape from his reality is only a welcome invitation to the infernal world of the Murim."
                    />

                    <ManhwaCard
                        id="first_hunter"
                        title="6. The First Hunter – Another Great Supernatural Manhwa"
                        imageSrc="/img2/m1.png"
                        writer="D-Dart"
                        genre="Action, Fantasy, Post-Apocalyptic"
                        releaseYears="2019-2020"
                        description="The First Hunter is an apocalyptic supernatural manhwa set in a wasteland of Earth following the abrupt invasion of the monsters. Amidst the chaos and war against the monsters, humans also discover special abilities. The manhwa, in particular, focuses on the central character, Kim Taehoon, a former special force officer. He looks gloomier than ever when an artefact forecasts his demise several years later. Learning the possibility of his death, he eventually fights to change the future of the world and his fate."
                    />

                    <ManhwaCard
                        id="noblesse"
                        title="7. Noblesse"
                        imageSrc="/img2/m1.png"
                        writer="Son Jeho"
                        genre="Fantasy, Action, Vampire"
                        releaseYears="2007-2019"
                        description="Noblesse is about a powerful vampire awakening in a modern world and trying to protect his friends. The story follows the life of Raizel, a powerful noble who awakens from centuries of slumber. As he learns about the modern world, he also discovers an underground organization, and a secret world that threatens humanity. With the help of his loyal servant, he battles against the unknown while trying to understand the world he has missed for centuries. Noblesse combines action, friendship, and supernatural elements, making it a must-read."
                    />

                    <ManhwaCard
                        id="ultimate_outcast"
                        title="8. Ultimate Outcast"
                        imageSrc="/img2/m1.png"
                        writer="Yoo Hobin"
                        genre="Action, Supernatural"
                        releaseYears="2016-2018"
                        description="Ultimate Outcast is a fantastic supernatural manhwa revolving around Kang Hanuel, a victim of bullying. As the story unfolds, he discovers strange powers and the ability to change his identity. Initially, he finds himself losing control and seeks revenge on the students who bullied him. Eventually, he realizes that he possesses supernatural abilities to enact revenge on his enemies and swiftly changes his identity to the ultimate outcast."
                    />

                    <ManhwaCard
                        id="unholy_blood"
                        title="9. Unholy Blood"
                        imageSrc="/img2/m1.png"
                        writer="Lina Im"
                        genre="Fantasy, Action, Vampire"
                        releaseYears="2020-2021"
                        description="Unholy Blood is a tale of a young girl Hayan Park, the last pure-blood vampire. Her character is set against the background of a world filled with vicious vampires and where her kind is under constant attack. Despite Hayan being an incredibly powerful pure-blood vampire, she has a simple wish of living peacefully with her human friends. However, it becomes a challenge when she needs to confront her past while keeping her loved ones safe."
                    />

                    <ManhwaCard
                        id="dice"
                        title="10. Dice: The Cube that Changes Everything"
                        imageSrc="/img2/m1.png"
                        writer="Hyunseok Yun"
                        genre="Fantasy, Game, Drama"
                        releaseYears="2013-Present"
                        description="Dice: The Cube that Changes Everything follows a young boy, Dongtae, who has constantly been bullied throughout his life. However, everything takes a turn when he finds a strange cube that can grant him wishes. But along with the benefits of the dice come its drawbacks and consequences. While he finds the strength to fight back and get revenge on his bullies, he finds himself in a more dangerous predicament."
                    />
                </section>

                <section className='tags_container'>
                    <div className='tags'>
                        <p style={{ color: 'black', fontWeight: 'bolder', backgroundColor: 'transparent' }}>Tags: </p>
                        <p>Noblesse</p>
                        <p>Tower of God</p>
                    </div>
                </section>

                <section className="comment-section">
                    <h4>If you have questions about the supernatural manhwa recommendations, please ask in the comments below. Stay tuned for more popular recommendations, unbiased fantasy manhwa reviews, and the latest webtoon updates!</h4>
                    <form className="comment-form">
                        <textarea
                            placeholder="Leave Your Comment..."
                            required
                        ></textarea>
                        <button type="submit">POST COMMENT</button>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Page2;
