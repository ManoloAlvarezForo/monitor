import React, { Component } from 'react';

class Dashboards extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <div style={{ flexDirection: 'column', display: 'flex', height: '100vh' }}>
                <div style={{ height: '100vh', borderRadius: '5px 5px 0 0 ', backgroundColor: '#e6e6e6', margin: '12px' }}>
                    <div style={{ display: 'flex', paddingLeft: '10px', fontWeight: 'bold', fontSize: '1.2rem', alignSelf: 'flex-start' }}>
                        Dashboards
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a className="button is-primary">Load data</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Dashboards;