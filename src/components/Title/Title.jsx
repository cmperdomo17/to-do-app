import { useHoverEffect } from '../hoverEffect';

const Title = () => {
    const { onMouseEnter, onMouseLeave, textStyle } = useHoverEffect();

    return (
        <h1 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={textStyle}
            className={`
                flex justify-center pb-3 pt-5 text-5xl font-PlayPen font-bold tracking-widest text-white
                transition-all duration-500 ease-in-out cursor-pointer
            `}>
            ToDo App
        </h1>
    )
}

export { Title };
