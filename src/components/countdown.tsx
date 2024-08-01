import React, { useState, useEffect } from 'react';

// import font
import "../assets/fonts/fonts.css";
import "../assets/fonts/Lato/Lato-Regular.ttf"
import "../assets/fonts/Dorsa/Dorsa-Regular.ttf"
import "../assets/fonts/Droid_Sans/DroidSans-4Eg4.ttf"

interface CountdownProps {
    targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +targetDate - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                showNotification();
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    useEffect(() => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    }, []);

    const showNotification = () => {
        if (Notification.permission === "granted") {
            new Notification("Sudah waktunya Minecrafter Bersatu 2024 dimulai!", {
                body: "Hai Minecrafter! Yuk, saatnya memeriahkan momen kemerdekaan",
                icon: "/mcb.png"
            });
        }
    };


    return (
        <div className='dp:w-[60%] lp:w-[60%] tb:w-[80%] mb:w-[100%] | 
                        dp:my-0 lp:my-0 tb:my-0 mb:my-6 | 
                        dp:ml-0 lp:ml-0 tb:ml-8 mb:ml-0 | 
                        dp:mx-0 lp:mx-0 tb:mx-0 mb:mx-auto | 
                        dp:-mt-10 lp:-mt-10 tb:-mt-10 | 
                        dp:mb-2 lp:mb-2 tb:mb-2 | '>

            <p className='text-white text-sm dp:ml-0 lp:ml-0 tb:ml-0 mb:ml-[10%]'>Memulai dalam...</p>

            <div className="flex shrink gap-x-[3%] space-x-0 mx-4 my-4 text-white items-center align-center dp:justify-start lp:justify-start tb:justify-start mb:justify-center">

                        <div className='flex flex-col justify-center items-center'>
                            <p style={{ fontFamily: 'DroidSans, sans-serif' }} className='mb-1 text-5xl uk-countdown-days'>{timeLeft.days}</p>
                            <p style={{ fontFamily: 'LatoRegular, sans-serif' }} className="my-0 uk-countdown-label text-sm">Hari</p>
                        </div>
                        
                        <div style={{ fontFamily: 'DorsaRegular, sans-serif' }} className="text-white text-base font-thin opacity-30">|</div>

                        <div className='flex flex-col justify-center items-center'>
                            <p style={{ fontFamily: 'DroidSans, sans-serif' }} className='mb-1 text-5xl uk-countdown-hours'>{timeLeft.hours}</p>
                            <p style={{ fontFamily: 'LatoRegular, sans-serif' }} className="my-0 uk-countdown-label text-sm">Jam</p>
                        </div>

                        <div style={{ fontFamily: 'DorsaRegular, sans-serif' }} className="text-white text-base font-thin opacity-30">|</div>

                        <div className='flex flex-col justify-center items-center'>
                            <p style={{ fontFamily: 'DroidSans, sans-serif' }} className='mb-1 text-5xl uk-countdown-minutes'>{timeLeft.minutes}</p>
                            <p style={{ fontFamily: 'LatoRegular, sans-serif' }} className="my-0 uk-countdown-label text-sm">Menit</p>
                        </div>

                        <div style={{ fontFamily: 'DorsaRegular, sans-serif' }} className="text-white text-base font-thin opacity-30">|</div>

                        <div className='flex flex-col justify-center items-center'>
                            <p style={{ fontFamily: 'DroidSans, sans-serif' }} className='mb-1 text-5xl uk-countdown-seconds'>{timeLeft.seconds}</p>
                            <p style={{ fontFamily: 'LatoRegular, sans-serif' }} className="my-0 uk-countdown-label text-sm">Detik</p>
                        </div>

            </div>

        </div>
        
    );
};

export default Countdown;
