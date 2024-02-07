

const MainPage = () => {
    return (
        <>
        <div className="container">

            <div className="leftSide">
                <h1>YOUR FELT DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam hic illum maxime possimus omnis, facilis fugit numquam itaque minima ullam!</p>
                <div className="btns">
                    <button className="btn1">Category</button>
                    <button className="btn2 btn">Shop Now</button>
                </div>
                <h5>Also Available On</h5>
                <div className="icons">
                    <img src="./public/flipkart.png" alt="" />
                    <img src="./public/amazon.png" alt="" />
                </div>
            </div>
            <div className="rightSide">
                <img src="./public/download.jpeg" alt="" />
            </div>
        </div>
        </>
    )
}

export default MainPage;

