import React, {useEffect, useState } from 'react'


function CustomerList(props) {
    const [customers, setCustomer] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8090/api/customers/')
        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customers)
        }
    }
    useEffect(() => {
        fetchData();

    }, []);

    return (
        <>
        <h1 className="text-center mt-4">Customers</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {customers?.map(customer => {
                    return (
                        <tr key={ customer.id }>
                            <td>{ customer.first_name }</td>
                            <td>{customer.last_name}</td>
                            <td>{customer.phone_number}</td>
                            <td>{ customer.address }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>

    )
}
export default CustomerList;
