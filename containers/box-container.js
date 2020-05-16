import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { loadService, loadProviders } from "../actions/index.js"

class BoxCon extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = { serviceList: null, providersList: null };
    }
    
    handleClick(id) {
        console.log(id);

    }

    componentDidMount() {
        this.props.loadService();
        this.props.loadProviders();
       
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.providersList !== nextProps.providersList) {
            this.setState({ providersList: nextProps.providersList });
            console.log(nextProps.providersList)
        }
        if (this.props.service !== nextProps.service) {
            this.setState({ service: nextProps.service });
        }

    }

    render() {
        
        return (
            <Fragment>
            <ul>
                    {this.state.service && this.state.service.map(product =>
                        <li onClick={() => this.handleClick(product.id)} key={product.id}>
                        {product.attributes.name}

                    </li>
                )}
            </ul>


                <ul>
                    {this.state.providersList && this.state.providersList.map(providers =>
                    <li key={providers.id}>
                        {providers.id}
                        {providers.attributes.name}

                    </li>
                )}
                </ul></Fragment>
        )
    }
}


export default connect((state) => {
    return { service: state.items, providersList: state.providersList };
},
    { loadService, loadProviders })(BoxCon);
