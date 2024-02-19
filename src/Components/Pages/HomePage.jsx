import React from 'react';
import axios from 'axios';
import './HomePage.css'; 
import { useState } from 'react';
import { Layout } from 'antd';
import AdminMenuList from '../Assets/AdminMenuList';

const { Header, Sider } = Layout;
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            garbageBins: [],
            loading: false,
            error: null
        };
        this.callApi = this.callApi.bind(this);
    }

   
    sidebar() {

        return (

            <Layout>
                <Sider className="sidebar">

                    <AdminMenuList/>

                </Sider>
            </Layout>
        );
    }



    componentDidMount() {
        // Call the API when the component mounts
        this.callApi();
    }

    callApi = () => {
        console.log('called');
        this.setState({ loading: true });

        axios.get('http://localhost:8080/api/v1/garbageBin/viewBinData')
            .then((response) => this.successfulResponse(response))
            .catch((error) => this.errorResponse(error));
    }

    successfulResponse(response) {
        this.setState({ garbageBins: response.data, loading: false });
    }

    errorResponse(error) {
        console.error('Error fetching data:', error);
        this.setState({ error: error, loading: false });
    }

    render() {
        const { garbageBins, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                
                <div>

                    {this.sidebar()}
                </div> 

                <div className="centered">
               
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Bin ID</th>
                                <th>Filled Level</th>
                                <th>Filled Weight</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {garbageBins.map(bin => (
                                <tr key={bin.id}>
                                    <td>{bin.id}</td>
                                    <td>{bin.filledLevel}</td>
                                    <td>{bin.filledWeight}</td>
                                    <td>{bin.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <br></br>
                    <br></br>
                    <button onClick={this.callApi} >Refresh data</button>
                </div>

            </div>
        );
    }
}

export default HomePage;
