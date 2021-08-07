import React from 'react';
import video from '../../Assets/video.mp4'
import './Showreel.css';
import logo from '../../Assets/logoShowReel.svg'

const Showreel = () => {
    return (
        <div className="showReelContainer">
                <div class="vid">
                    <video autoPlay loop id="video" className="video">
                        <source src={video} type="video/mp4"/>
                        
                    </video>
                    <div className="showText">
                        <img src={logo} alt="" />
                        {/* <p> Компания Velocity специализируется на продаже товаров для велосипедного спорта - велосипедов, запасных частей, аксессуаров и различного спортивного инвентаря для активного спорта и отдыха. Клиент всегда прав! Это основа торговли, наш подход к работе, начинается именно с этого правила. Мы дорожим своей репутацией и чувствами наших клиентов, именно по этому мы не только продаем интересующий Вас товар, но и даем грамотные советы, основываясь на многолетнем опыте, не только торговли, но и профессионального катания на велосипедах. Мы осуществляем доставку в кратчайшие сроки и лично контролируем, предпродажную настройку велосипеда, по личным параметрам покупателя. Ведь от этого зависит комфортно ли вам будет ездить на велосипеде.</p> */}
                        <p>«Жизнь — как вождение велосипеда. Чтобы сохранить равновесие, ты должен двигаться»
                             —Альберт Эйнштейн, физик-теоретик.</p>
                    </div>
                </div>
            
        </div>
    );
};

export default Showreel;