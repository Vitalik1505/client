import React from "react";
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button" 
import Carousel from "react-bootstrap/Carousel"
import {useHistory} from "react-router-dom" 
import { SERVICE_ROUTE } from "../utils/consts";

import main1 from "../assets/main1.jpg"
import main2 from "../assets/main2.jpg"
import main3 from "../assets/main3.jpg"
import clean4 from "../assets/clean4.jpg"
import clean2 from "../assets/clean2.jpg"
import clean5 from "../assets/clean5.jpg"
import clean6 from "../assets/clean6.jpg"
 
const Main = () => {
    const history = useHistory()
    return  (
        <div> 
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={main1} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>ДЕТЕЙЛІНГ</h3>
                        <p>АБСОЛЮТНА ЧИСТОТА І МАКСИМАЛЬНИЙ ЗАХИСТ</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={main2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Your Detailing</h3>
                        <p>Ваш автомобіль потрапить в руки справжніх професіоналів</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={main3} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Максимум уваги кожній деталі</h3>
                        <p>Використовуємо тільки кращі продукти, представлені на світовому ринку автокосметики та автохімії</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
 

            <div class="jumbotron jumbotron-fluid"> 
                <div class="container">
                    <h2 className="text-center mt-4" style={{fontFamily:"Christmas ScriptC"}}>Коротко про Детейлінг</h2>
                    <p style={{fontSize:20, fontFamily:"Alexander", textIndent:'40px'}} className="mt-2">
                        <b>Детейлінг автомобіля</b> – що це таке і чим, крім вартості, відрізняється від звичайної мийки авто?
                        Сервіс професійного автодетейлінга має на увазі повний догляд за машиною, як зовнішній, так і внутрішній,
                        який торкається буквально кожного сантиметру.. Початкове призначення – підготовка автомобілів до виставкових заходів.
                        Послуга детейлінг пропонується для тих автовласників, які хочуть утримувати автомобіль в повній чистоті.
                        Також можна використовувати при передпродажній підготовці або після покупки авто, перед відповідальними заходами 
                        (весілля друзів або зустріч важливих партнерів) – причин багато, результат один – абсолютна чистота і доглянутість Вашого автомобіля.
                    </p>
                </div>
            </div>
 
            <div class="jumbotron jumbotron-fluid mt-5" style={{backgroundColor: "#CCCCCC"}}> 
                <div class="container">
                    <Image  className="mx-5" width="45%" height=""src={clean4}/>
                    <Image width="45%" src={clean2}/>
                    <p style={{fontSize:20, fontFamily:"Alexander", textIndent:'40px'}} className="mt-2">
                        Кузов, диски, скла, днище і вихлопні насадки автомобіля очищаються від будь-яких видів забруднень, маскуються дрібні пошкодження.
                        Салон авто піддається сухому та вологому прибиранню з використанням ручних інструментів, можлива повна хімчистка салону.
                        На всі кузовні, пластикові, хромовані, дерев’яні, шкіряні та гумові елементи наносяться захисні склади.
                    </p>
                    <p style={{fontSize:20, fontFamily:"Alexander", textIndent:'40px'}} className="mt-2">
                        В роботі використовується професійне обладнання, спеціальне освітлення, матеріали і автохімія для детейлінгу від Koch Chemie
                        (Німеччина) – абсолютно безпечні як для авто, так і для людини. Розумне використання послуги детейлінг подовжує стан «нового» автомобіля
                        – особливо це актуально взимку, коли авто піддається впливу активних реагентів. У комплексі з обробкою NANO керамікою і нанесенням захисної
                        плівки автомобіль буде дуже довго виглядати краще нового, тим самим зберігаючи свою вартість.
                    </p>
                </div>
            </div>

            <div class="jumbotron jumbotron-fluid mt-5"> 
                <div class="container">
                    <div>
                        <h4>Для чого Вам потрібний детейлінг автомобіля?</h4>
                        <ul class="list-unstyled">
                            <li style={{fontSize:20, fontFamily:"Alexander"}}> 
                                1. Відчуття чистого і охайного автомобіля кожен день. Детейлінг - це не просто миття та полірування автомобіля.
                                Це задоволення від його зовнішнього вигляду і справної роботи.
                            </li>
                            <li style={{fontSize:20, fontFamily:"Alexander"}}> 
                                2. Розуміння, що Ваш автомобіль надійно захищений. Твердий віск або полімерні покриття не просто надають блиск, 
                                а захищають кузов від зовнішніх факторів. Так само, як засоби для вінілу і пластику і засоби з догляду за шкірою 
                                зберігають їх зовнішній вигляд і властивості.
                            </li>
                            <li style={{fontSize:20, fontFamily:"Alexander"}}>
                                3. Автомобіль як предмет гордості. Якщо Ви по-справжньому любите свій автомобіль, то не зможете закрити очі на мийну 
                                риску на кузові або відбитки пальців на панелі приладів. Навпаки, Ви захочете насолоджуватися блиском і глибиною 
                                кольору автомобіля, з гордістю демонструвати оточуючим.
                            </li>
                            <li style={{fontSize:20, fontFamily:"Alexander"}}> 
                                4. Застосовують детейлінг і для консервації автомобіля з метою зменшення наслідків зовнішніх руйнівних впливів при тривалому зберіганні.
                                Правильно і грамотно зроблений детейлінг може значно збільшити або підвищити вартість автомобіля.
                                Багато автолюбителів вдаються до таких послуг для значного поліпшення зовнішнього та внутрішнього вигляду автомобіля,
                                а також підвищення його статусу, оскільки сяючий, доглянутий автомобіль притягує до себе погляди і приносить його власнику величезне задоволення.
                            </li>
                        </ul>
                    </div>
                    <Image  className="mx-5" width="45%" height=""src={clean5}/>
                    <Image width="45%" src={clean6}/> 
                </div>
            </div>

            <div class="jumbotron jumbotron-fluid mt-5 pb-2" style={{backgroundColor: "#CCCCCC" }}> 
                <div class="container">
                    <h4>Чому ми рекомендуємо довірити свій автомобіль саме Центру професійного детейлінгу <b>Your Detailing</b></h4>
                    <p style={{fontSize:20, fontFamily:"Alexander", textIndent:'40px'}} className="mt-2"> 
                        У нашому детейлінг центрі Ваш автомобіль потрапить в руки справжніх професіоналів,
                        які допоможуть зберегти або повернути йому первозданну красу.
                        Наш детейлінг центр працює за новітніми технологіями під девізом «максимум уваги кожній деталі»,
                        при цьому роботи виконуються в максимально короткий термін. Використовуємо тільки кращі продукти,
                        представлені на світовому ринку автокосметики та автохімії. 
                         
                        Також ви можете замовити обрану вами послугу онлайн та отримати знижку в <b>25% </b> 
                        <Button variant="warning" onClick={() => history.push(SERVICE_ROUTE)}>Послуги</Button>
                    </p>
                </div>
            </div>

        </div> 
    )
}

export default Main;