import styled, { keyframes } from 'styled-components';

function Loading(drops) {
    /* Layout principal do loading */
    const Load = styled.div`
        margin: 0 auto;
        padding: 25px;
    `;

    /* Keyframe da animação de loading */
    const SpinAnimation = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `

    /* Bolinha central do loading */
    const Ball = styled.div`
        width: 64px;
        height: 64px;
        border: solid white 10px;
        border-top-color: rgb(0, 152, 116);
        border-radius: 50%;
        margin: 0 auto;
        animation: ${SpinAnimation} 2s linear infinite;
    `;
    return (
        <Load>
            <Ball />
        </Load>
    )
};

export default Loading;