const Comp=({pic,name,bold,p1,p2,footer,btn,l})=>{
    return(
        <>
        <div className="main_container" style={{display:"flex",gap:"5rem"}}>
            <div classNme="text_container" style={{width:"50%"}}>
            <div className="inner_image_part" style={{display:"flex",alignItems:"center"}}>
                <img src={`${pic}`} alt="" style={{height:"3rem", width:"3rem",borderRadius:"50%" ,marginLeft:"0rem"}}/>
                <span style={{marginLeft:"1rem" ,fontSize:"18px"}}>{`${name}`}</span>


            </div>
            <div className="inner_text_part">
                <h1>{`${bold}`}</h1>
                <p>{`${p1}`}</p>
                <p>{`${p2}`}</p>
                <span>{`${footer}`}</span>
                <button style={{marginLeft:"5rem",borderRadius:"8px"}}>{`${btn}`}</button>

            </div>

            </div>

            <div ClassName="image_container" style={{}}>
            <img src={`${l}`} alt=" " style={{heght:"8rem", width:"25rem"}}/>

            </div>
        </div>
        </>
    );
}

export default Comp;