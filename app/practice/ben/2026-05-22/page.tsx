const Page = () => {
    return(
        <>
        <div className="bg">
            <div className="bg2">
                <span className="bar1">
      
                </span>
                <span className="bar2">
      
                </span>
                <span className="bar3">
      
                </span>
            </div>
        </div>
        			<style
				dangerouslySetInnerHTML={{
					__html: `
  * {
    margin: 0;
    padding: 0;
  }
  .bg {
    width: 100%;
    height: 100%;
    background: #0D2A58;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bg2 {
    height: 140px;
    width: 340px;
    background: #F5E3B5;
    position: relative;
  }
  .bar1 {
    position: absolute;
    height: 100px;
    width: 30px;
    background: #0D2A58;
    top: 50%;
    transform: translateY(-50%);
    left: 20px
  }
    .bar2 {
    position: absolute;
    height: 100px;
    width: 30px;
    background: #0D2A58;
    top: 50%;
    transform: translateY(-50%);
    right: 20px
  }
      .bar3 {
    position: absolute;
    height: 29px;
    width: 240px;
    background: #0D2A58;
    top: 50%;
    transform: translateY(-49%) translateX(-50%);
    left: 50%;
  }
`,
				}}
			/>
        </>
    )
}

export default Page
