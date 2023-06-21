import React, {useState} from 'react';

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('tab-one');
    const onClickHandler = (event, idx) => {
        event.preventDefault();
        setActiveTab(idx);
    }
    return (
        <div classNameName="wrapper">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'tab-one' ? 'active' : ''}`} href="#" onClick={(event) => onClickHandler(event, 'tab-one')}>Tab One</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'tab-two' ? 'active' : ''}`} href="#" onClick={(event) => onClickHandler(event, 'tab-two')}>Tab Two</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'tab-three' ? 'active' : ''}`} href="#" onClick={(event) => onClickHandler(event, 'tab-three')}>Tab Three</a>
                </li>
            </ul>
            <div className="tab-content" id='myTabContent'>
                <div className={`tab-pane fade show ${activeTab === 'tab-one' ? 'active' : ''}`} id="tab-one">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Hi!</textarea>
                </div>
                <div className={`tab-pane fade show ${activeTab === 'tab-two' ? 'active' : ''}`} id="tab-two">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Hello!</textarea>
                </div>
                <div className={`tab-pane fade show ${activeTab === 'tab-three' ? 'active' : ''}`} id="tab-three">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">There!</textarea>
                </div>
            </div>
        </div>
    )
}

export default Tabs;