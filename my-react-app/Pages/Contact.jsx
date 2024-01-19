const Contact = () => {
    return (
        <div>
            <h1 style={{ color: 'white' }} >Contactanos Por Estos Medios</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="./src/assets/WhatsApp-Logo.wine.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">WhattsApp</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./src/assets/Facebook-f_Logo-Blue-Logo.wine.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Facebook</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./src/assets/Instagram-Logo.wine.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Instagram</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./src/assets/Twitter-Logo.wine.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Twitter or X</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;