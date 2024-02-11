




function Image()
{

    const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]

    const [mainImg, setMainImg] = React.useState(images[0])

    function changeMainImg(src)
    {
        setMainImg((prev =>{
            if(prev === src) {return prev}
            else {return src}
        }))
    }


    return(
        <section className="left-side">
            <div className="main-picture-div">
                <img className="main-picture" src={mainImg} alt=""/>
            </div>
            <div className="small-picture-div">
                <img className="small-picture" src={images[0]} alt="" onClick={()=>changeMainImg(images[0])}/>
                <img className="small-picture" src={images[1]} alt="" onClick={()=>changeMainImg(images[1])}/>
                <img className="small-picture" src={images[2]} alt="" onClick={()=>changeMainImg(images[2])}/>
                <img className="small-picture" src={images[3]} alt="" onClick={()=>changeMainImg(images[3])}/>
            </div>
        </section>
    )
}

ReactDOM.render(<Image />, document.getElementById("root"))