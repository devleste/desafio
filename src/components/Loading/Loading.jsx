import styled from 'styled-components'

const LoadingStyles = styled.div`
display:flex;
align-items:center;
justify-content:center;
img {
    margin: 0 0 0 5rem;
}
`

const Loading = () => {
    return (
        <LoadingStyles>
            <img src="loading.gif" alt="loading" />
        </LoadingStyles>
    )
}

export default Loading;