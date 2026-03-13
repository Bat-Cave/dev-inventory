const Page = () => {
	return (
		<>
			<div className="bg">
				<div className="center">
					<span className="top" />
					<span className="right" />
					<span className="bottom" />
					<span className="left" />
				</div>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
 .bg {
      width: 400px;
    height: 300px;
    position: absolute;
    left: 0px;
    top: 0px;
    background: #5DC392;
    display: relative;
}
  .center {
      background: #D9D9D9;
    width: 230px;
    height: 180px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: relative;
  }
  .top {
      width: 260px;
      height: 30px;
      background: #243D83;
      top: -30px;
      background: #243D83;
      position: absolute;
    }
  .right {
      width: 30px;
      height: 210px;
      background: #243D83;
      right: 0px;
      background: #243D83;
      position: absolute;
    }
    .bottom {
        width: 260px;
        height: 30px;
        background: #243D83;
        bottom: -30px;
        right: 30px;
        background: #243D83;
        position: absolute;
    }
    .left {
        width: 30px;
        height: 210px;
        background: #243D83;
        left: 0px;
        top: -180px;
        background: #243D83;
        position: absolute;
    }
`,
				}}
			/>
		</>
	);
};

export default Page;
