const CartWidget = () => {
    return <div> 
        <button className="btn btn-outline">
            <i className="bi bi-cart"></i>
            <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{marginTop:13}}>
                3
            <span className="visually-hiden"></span>
            </span>
        </button>
    </div>
    };
    
    export default CartWidget;