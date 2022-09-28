import Photo from "./photo"


function Header() {
    return (
        <>
            <div className="background-black">
            </div>
            <div className="flex">
                <small className="logo">HF</small>
                <span className="flex1">
                    <span className="ab">
                        <i class="fas fa-running"> </i>
                        <p >LIVE</p>
                    </span>
                    <span className="ab">
                        <i class="fas fa-running"> </i>
                        <p>MEMBERSHIPS</p>
                    </span>
                    <span className="ab">
                        <i class="fas fa-running"> </i>
                        <p>PLANS</p>
                    </span>
                    <span className="ab">
                        <i class="fas fa-running"> </i>
                        <p>MORE</p>
                    </span>
                </span>
                <div>
                    <i class="fas fa-user"></i>
                    <button>Login</button>
                </div>
            </div>
            <Photo/>

        </>
    )
}

export default Header