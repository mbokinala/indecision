class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            buttonText: 'Show Details'
        }

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState((prevState) => {
            let visible = !(prevState.visible);
            let buttonText;
            if(visible) {
                buttonText = 'Hide Details'
            } else {
                buttonText = 'Show Details'
            }

            return {
                visible,
                buttonText
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.buttonText}</button>
                <p hidden={!(this.state.visible)}>Here are some details that you can now see</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/* let visible = false;
let buttonText = 'Show Details'

const appRoot = document.getElementById('app');

const toggleVisibility = (e) => {
    visible = !visible;
    buttonText = (buttonText == 'Show Details') ? 'Hide Details' : 'Show Details';
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility} name="toggle">{buttonText}</button>
            <p hidden={!visible}>Here are some details that are now visible</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render(); */