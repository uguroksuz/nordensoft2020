import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';

const PriceTable = ({ headline }) => {

    const [serverState, setServerState] = useState({
        columnVisibility: 'visible-column-2',
        b1: '',
        b2: '',
        b3: ''
    });

    const colButton1 = () => {
        setServerState({ columnVisibility: 'visible-column-1', b1: 'active', b2: '', b3: '' })
    }
    const colButton2 = () => {
        setServerState({ columnVisibility: 'visible-column-2', b1: '', b2: 'active', b3: '' })
    }
    const colButton3 = () => {
        setServerState({ columnVisibility: 'visible-column-3', b1: '', b2: '', b3: 'active' })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="font-2rem text-center my-5">{headline}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-5 price-button-container">
                    <button className={`price-button ${serverState.b1}`} onClick={colButton1}> STARTER </button>
                    <button className={`price-button ${serverState.b2}`} onClick={colButton2}> PROFESSIONAL </button>
                    <button className={`price-button ${serverState.b3}`} onClick={colButton3}> ENTERPRISE </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className={`table table-bordered ns-price-table ${serverState.columnVisibility}`}>
                        <thead>
                            <tr>
                                <th className="w-50" scope="col"></th>
                                <th scope="col">STARTER</th>
                                <th scope="col">PROFESSIONAL</th>
                                <th scope="col">ENTERPRISE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Up to 5 Hours</th>
                                <td><FaCheck /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Up to 10 Hours</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Up to 20 Hours</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Magento Optimized Hosting</td>
                            </tr>
                            <tr>
                                <th scope="row">Magento Cloud Edition</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Nexcess</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Hostway</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Development Operations Setup</td>
                            </tr>
                            <tr>
                                <th scope="row">Git version control software	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Staging environment for future work	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">All Native Magento 2.0 Enterprise Functionality</td>
                            </tr>
                            <tr>
                                <th scope="row">Multi-Store Capabilities</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Massive Catalog Support	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Flexible Promotions	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row"> FulIy-Integrated Payment & Shipping </th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Powerful System Configuration Options </th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Open Source	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Robust Order Management	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Incredible Customization Potential	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">B2B Module	</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Enterprise Exclusive Features</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Theme Implementation</td>
                            </tr>
                            <tr>
                                <th scope="row">Fluid Responsive</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Best Magento Practices</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Proven Scalability	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Easily Upgradable</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Lightweight for Speed and Growth</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">4 to 6 Week Design Process</td>
                            </tr>
                            <tr>
                                <th scope="row">Visual Designs</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Web Style Guide	</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Written Content (as provided by the client)	</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Images/Videos (as provided by the client) </th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Stock Photography </th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Web Style Guide</td>
                            </tr>
                            <tr>
                                <th scope="row">Colors</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Typography</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Logo Variations	</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Buttons</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Headings</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">HTML Elements</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Icon Sets</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row">Forms</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Stock Photography</td>
                            </tr>
                            <tr>
                                <th scope="row">Stock Photography</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">11 Visual Designs (Unique Page Templates)</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Checkout Page</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Order Success Page</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Login/Register Page</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">My Account Dashboard</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Search Results Page</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Cart Page</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Homepage</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">About</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Contact Us</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Category Page</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Product Page</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">11 page templates developed</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Checkout Page</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Order Success Page</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Login/Register Page</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">My Account Dashboard</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Search Results Page</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Cart Page</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Homepage</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">About</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Contact Us</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Category Page</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Product Page</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Up to 5 additional custom pages designed & developed</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Unique Designs</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Development of Up to 5 Unique Templates</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Contact Form</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Custom Fields</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">eCommerce Features</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Mini-Cart</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Top Sellers</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Popular Products</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">New Products</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Related Products</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Upsells</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Cross-Sells</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Product Zoom</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Color Swatches</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Filterable Attributes</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Ajax Add-to-Cart</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Ajax Filtering</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Reviews</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Data Migration</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Customers</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Orders</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Products</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Categories</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Catalog Setup Consultation</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Catalog Structure</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Attribute Structure</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Product Structure</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">All Product Types Supported</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Mega Menu</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Mega Menu Setup for Larger Catalog</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Ability to Control and Manipulate Mega Menu</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Customer Group & Tiered Pricing Setup</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Customer Group Setup Up to 20</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Tiered Pricing Setup & Consulting</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Marketing & Promotions Setup</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Marketing Setup</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Cart Price Rule Setup &amp; Training</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Traffic Acquisition Consulting</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Conversion Optimization consulting</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Catalog Price Rule Setup &amp; Training</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Google Analytics Training and Setup</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Magento Reports Training</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Up to 5 additional modules installed</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Up to 5 Module Installation and Configuration</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">QA &amp; Testing of Module</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Vendor Selection and Consulting</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Training on Modules</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Admin Panel Configuration</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Up to 5 Users</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Base Store Settings</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Caching &amp; Indexing</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Email Template Setup</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Style Email Header & footer and base classes	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Email Marketing (Recommended)</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Dotmailer</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Mailchimp</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Bronto</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Hubspot</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Elastic Search Configuration</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Elastic Search Configuration	</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Tax Setup</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Default Magento Tax Table Setup</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Avalara</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Vertex</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Payment Gateway Configuration</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Paypal</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Authorize.net</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Purchase Order</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Custom Payment Method</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Customer Help Chat (Recommended)</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Drift</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Olark</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Zendesk</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Intercom</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Freshdesk</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Analytics</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Google Analytics Universal tracking implementation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Access to Google Analytics free robust platform</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">eCommerce tracking</th>
                                <td><FaCheck /></td>
                                <td> <FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Google Tag Manager Magento Configuration</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">SEO Configuration</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">301 or 302 redirects consultation and implementation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Image alternate text consultation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Meta description consultation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Title tag consultation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Site architecture consultation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Google Webmaster Tools consultation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">H1 through H6 tag consultation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Google & Bing Sitemap Submission</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Sitemap submission to Google and Bing</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Mobile & Cross Browser Compatibility</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">IE 11+, Edge, Google Chrome, Firefox, and Safari</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Desktop, tablet, and mobile phone optimized viewing</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">iOS and Android Compatibility</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Q/A and Testing</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Full Site Functionality Testing</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Security</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">PCI compliant best practices	</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">SSL Implementation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Training Session</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">2 Hours</th>
                                <td><FaCheck /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">5 Hours</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">10 Hours</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Site Launch</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">DNS Switchover</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Minify and combine CSS &amp; Javascript</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Google Page Speed Module Implementation</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">Image Optimization</th>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                                <td><FaCheck /></td>
                            </tr>
                            {/* Section */}
                            <tr className="table-line-head">
                                <td colSpan="4">Warranty</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">14 Day</th>
                                <td><FaCheck /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">30 Day</th>
                                <td></td>
                                <td><FaCheck /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left w-50">45 day</th>
                                <td></td>
                                <td></td>
                                <td><FaCheck /></td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PriceTable