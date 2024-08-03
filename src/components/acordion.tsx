import { useState } from "react"

interface AcordionProps {
    title: string;
    content: string;
}

const Acordion: React.FC<AcordionProps> = ({ title, content }) => {
    const [titleColor, setTitlecolor] = useState<string>('white')

    const onTitleHover = (bool: boolean) => {
        if (bool == true) {
            setTitlecolor('#d9d9d9')
        } else {
            setTitlecolor('white')
        }
    }

    return (
        <>
            <a style={{color: `${titleColor}`, fontWeight: 'bold'}} onMouseOver={()=>onTitleHover(true)} onMouseLeave={()=>onTitleHover(false)} className="uk-accordion-title">{title}</a>
            <div className="uk-accordion-content text-sm">{content}</div>
        </>
    )
}

export default Acordion