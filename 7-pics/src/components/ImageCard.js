import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }

    componentDidMount() {
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10 + 1);
        this.setState({spans})

    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;