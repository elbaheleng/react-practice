import Gauge from 'react-gaugejs';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};
    }

    handleResultTextChange(value) {
        this.setState({value: value});
    }

    render() {
        return (
            <React.Fragment>
                <p>Value: {this.state.value}</p>
                <Gauge
                    value={750}
                    minValue={0}
                    maxValue={1000}
                    animationSpeed={32}
                    options={{
                        angle: 0.35,
                        lineWidth: 0.1,
                        radiusScale: 1,
                        pointer: {
                            length: 0.6,
                            strokeWidth: 0.035,
                            color: '#000000',
                        },
                        limitMax: false,
                        limitMin: false,
                        colorStart: '#6F6EA0',
                        colorStop: '#C0C0DB',
                        strokeColor: '#EEEEEE',
                        generateGradient: true,
                        highDpiSupport: true,
                    }}
                    textChangeHandler={handleResultTextChange}
                    donut

                    // any other props are passed through to the canvas element
                    className='gauge-canvas'
                    style={{height: '150px'}}
                />
            </React.Fragment>
        );
    }
}

