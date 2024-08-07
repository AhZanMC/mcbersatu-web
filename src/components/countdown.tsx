import React, { useState, useEffect } from 'react';




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
        <div className='w-[100%] flex flex-col mx-auto'>

            <p className='text-white text-sm dp:ml-[18%] lp:ml-[10%] tb:ml-[20%] mb:ml-[10%] lato-regular'>Memulai dalam...</p>

            <div className="flex shrink gap-x-[3%] space-x-0 mx-4 my-4 text-white items-center align-center justify-center">

                        <div className='flex flex-col justify-center items-center'>
                            <p className='droid-sans mb-1 text-5xl uk-countdown-days'>{timeLeft.days}</p>
                            <p className="lato-regular my-0 uk-countdown-label text-sm">Hari</p>
                        </div>
                        
                        <div className="dorsa text-white text-base font-thin opacity-30">|</div>

                        <div className='flex flex-col justify-center items-center'>
                            <p className='droid-sans mb-1 text-5xl uk-countdown-hours'>{timeLeft.hours}</p>
                            <p className="lato-regular my-0 uk-countdown-label text-sm">Jam</p>
                        </div>

                        <div className="dorsa text-white text-base font-thin opacity-30">|</div>

                        <div className='flex flex-col justify-center items-center'>
                            <p className='droid-sans mb-1 text-5xl uk-countdown-minutes'>{timeLeft.minutes}</p>
                            <p className="lato-regular my-0 uk-countdown-label text-sm">Menit</p>
                        </div>

                        <div className="dorsa text-white text-base font-thin opacity-30">|</div>

                        <div className='flex flex-col justify-center items-center'>
                            <p className='droid-sans mb-1 text-5xl uk-countdown-seconds'>{timeLeft.seconds}</p>
                            <p className="lato-regular my-0 uk-countdown-label text-sm">Detik</p>
                        </div>

            </div>

        </div>
        
    );
};

export default Countdown;
