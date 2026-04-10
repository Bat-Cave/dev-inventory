const Page = () => {
	return (
		<>
			<div className="w-100 h-75 relative isolate">
				<body
					className="overflow-hidden isol
                "
				>
	<div>
  <span className="span1"></span>
  <span className="span2"></span>
  <span className="span3"></span>
    <span className="span4"></span>
</div>
				</body>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
 body {
    margin: 0
        width: 100%;
    height: 100%;
    background: #394257;
    position: relative;
  }
  div {
    width: 140px;
    height: 140px;
    border-radius: 100%;
    background: #F0CD48;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-56%);
    z-index: 0;
  }
  .span1 {
    width: 40px;
    height: 40px;
    background: #394257;
    position: absolute;
    top: 23.5%;
    left: 21.5%;
    transform: translateX(-50%) translateY(-56%);
    z-index: 0;
  }
    .span2 {
    width: 40px;
    height: 40px;
    background: #394257;
    position: absolute;
    bottom: 7%;
    right: 7%;
    z-index: 0;
  }
    .span3 {
    width: 70px;
    height: 70px;
    background: #394257;
    position: absolute;
    top: 42.5%;
    left: 39%;
    transform: translateX(-50%) translateY(-56%);
    z-index: 0;
  }
      .span4 {
    width: 70px;
    height: 70px;
    background: #394257;
    position: absolute;
    bottom: 14%;
    right: 14%;
    z-index: 0;
  }
                `,
				}}
			/>
		</>
	);
};

export default Page;
