// create a function Card and export

const Card = ({ users,heading }) => {

    const Heading = ({h})=>{
        return (
            <h1> {h} </h1>
        )
    }
    return (
        <>
            <Heading h={heading} />
        {
            users.map((user, index) => (
                <div key={index} className='card'>
                    <div className="details">
                        <h2>
                            {user.details.id}.
                            <span>{user.details.name}</span>
                        </h2>
                        <p> {user.details.age}</p>
                    </div>
                    <div className="contact">
                        <div className="email">
                            <a href="http://"> {user.Contact.email}</a>
                        </div>
                        <div className="phone">
                            <a href="tel:+">{user.Contact.phone}</a>
                        </div>
                    </div>
                    <div className="address">
                        {user.address.city},
                        {user.address.state},
                        {user.address.country},
                        {user.address.zipcode}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card