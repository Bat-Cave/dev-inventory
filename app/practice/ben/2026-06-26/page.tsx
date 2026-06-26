const Page = () => {
    return(
        <>
        <div className="bg">
  <div className="container">
  <span className="span1">
  </span>
  <span className="span2">
  </span>
    <span className="span3">
  </span>
    <span className="span4">
  </span>
  </div>
</div>
        			<style
				dangerouslySetInnerHTML={{
					__html: `
  .bg {
    margin: 0;
    padding: 0;
  }
  .bg {
    width: 100%;
    height: 100%;
    background: #D8F581;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
      position: relative;
      width: 220px;
      height: 220px;
  }
    .span1 {
    width: 55px;
    height: 55px;
    background: #222222;
    position: absolute;
    left: 0;
    top: 0;
  }
  .span2 {
    width: 55px;
    height: 55px;
    background: #222222;
    position: absolute;
    right: 0;
    bottom: 0;
  }
    .span3 {
    width: 110px;
    height: 110px;
    background: #222222;
    position: absolute;
    right: 0;
    top: 0;
  }
      .span4 {
    width: 110px;
    height: 110px;
    background: #222222;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`,
				}}
			/>
        </>
    )
}

export default Page